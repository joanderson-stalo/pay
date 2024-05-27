import { baseURL } from '@/config/color'
import { useLogin } from '@/context/user.login'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import defaultPhoto from '@assets/icons/perfil.svg'
import { decode as base64Decode } from 'base-64'
import * as S from './styles'
import { useTicketID } from '@/context/id/ticketId'
import { Loading } from '@/components/Loading/loading'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

interface IMessage {
  From: string
  CreateTime: string
  Body: string
  FromImage: string
  Attachments: IAttachment[]
}

interface IAttachment {
  Filename: string
  Content: string
}

function formatMessageBody(body: string): JSX.Element {
  const newBody = body
    .replace(/\n/g, '<br/>')
    .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>')
  return <div dangerouslySetInnerHTML={{ __html: newBody }} />
}

export function ViewTicket() {
  const { dataUser } = useLogin()
  const [ticketMessages, setTicketMessages] = useState<IMessage[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [loading, setLoading] = useState<boolean>(true)
  const [isClosed, setIsClosed] = useState<boolean>(false)
  const navigate = useNavigate()
  const { selectedTicketID } = useTicketID()

  const fetchTicketDetails = useCallback(async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        `${baseURL}tickets/show?id=${selectedTicketID}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${dataUser?.token}`
          }
        }
      )

      const cleanedMessages = response.data.ticket.updated_messages.map(
        (message: { From: string; Attachments: any[] }) => ({
          ...message,
          From: message.From.replace(/<[^>]*>/g, ''),
          Attachments: message.Attachments.map((att: { Content: string }) => ({
            ...att,
            Content: base64Decode(att.Content)
          }))
        })
      )

      const trimmedMessages = cleanedMessages.map(
        (message: { Body: string }) => ({
          ...message,
          Body: message.Body.split('--')[0].replace(
            /- WEB: \[1\]https:\/\/stalo\.digital[\s\S]*/,
            ''
          )
        })
      )

      setTicketMessages(trimmedMessages)

      const updatedStatus = response?.data?.ticket?.updated_status
      if (updatedStatus === 'closed successful') {
        setIsClosed(true)
      }
    } catch (error) {
      console.error('Failed to fetch ticket details:', error)
    } finally {
      setLoading(false)
    }
  }, [dataUser?.token])

  useEffect(() => {
    fetchTicketDetails()
  }, [fetchTicketDetails])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const datePart = date.toLocaleDateString('pt-BR')
    const timePart = date.toLocaleTimeString('pt-BR')
    return { datePart, timePart }
  }

  const isUserMessage = (from: string) => {
    return from === dataUser?.name
  }

  const handleSendMessage = async () => {
    try {
      setLoading(true)
      await axios.put(
        `${baseURL}tickets/message?id=${selectedTicketID}`,
        { message: newMessage },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${dataUser?.token}`
          }
        }
      )
      fetchTicketDetails()
      setNewMessage('')
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  const handleCloseTicket = async () => {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Deseja realmente encerrar este ticket?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, encerrar!',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setLoading(true);
          await axios.put(
            `${baseURL}tickets/finish?id=${selectedTicketID}&final_evaluation=5`,
            null,
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${dataUser?.token}`,
              },
            }
          );

          Swal.fire({
            title: 'Encerrado!',
            text: 'O ticket foi encerrado com sucesso.',
            icon: 'success',
          }).then(() => {
            navigate('/tickets');
          });
        } catch (error) {

        } finally {
          setLoading(false);
        }
      }
    });
  };


  if (loading) {
    return <Loading />
  }

  return (
    <S.Container>
      <S.Title>Histórico do Ticket</S.Title>
      {ticketMessages.length > 0 ? (
        ticketMessages.map((message, index) => (
          <S.MessageBlock key={index} fromUser={isUserMessage(message.From)}>
            <div>
              <S.Text>
                <S.Label>De:</S.Label> {message.From}
              </S.Text>
              <S.Text>
                <S.Label>Data:</S.Label>{' '}
                {formatDate(message.CreateTime).datePart}
              </S.Text>
              <S.Text>
                <S.Label>Hora:</S.Label>{' '}
                {formatDate(message.CreateTime).timePart}
              </S.Text>
              <S.Label>Mensagem:</S.Label>
              <div>{formatMessageBody(message.Body)}</div>
              {message.Attachments.map((att, idx) => (
                <S.AttachmentContainer key={idx}>
                  <S.AttachmentIcon
                    src="/path/to/attachment_icon.svg"
                    alt="Attachment Icon"
                  />
                  <S.AttachmentLink
                    href={`data:text/plain;base64,${btoa(att.Content)}`}
                    download={att.Filename}
                  >
                    {att.Filename}
                  </S.AttachmentLink>
                </S.AttachmentContainer>
              ))}
            </div>
            <S.ProfileImage
              src={
                message.FromImage &&
                message.FromImage.includes('contabostorage')
                  ? message.FromImage
                  : defaultPhoto
              }
              alt="Foto de perfil"
            />
          </S.MessageBlock>
        ))
      ) : (
        <p>Nenhuma mensagem disponível para este ticket.</p>
      )}

      {!isClosed && (
        <S.MessageInputContainer>
          <S.Label>Mensagem:</S.Label>
          <S.TextArea
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            placeholder="Digite sua mensagem aqui..."
          />

          <S.ButtonContainer>
            <S.BackButton onClick={() => navigate(-1)}>Voltar</S.BackButton>
            <S.CloseTicketButton onClick={handleCloseTicket}>
              Encerrar Ticket
            </S.CloseTicketButton>
            <S.SendButton
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
            >
              Enviar
            </S.SendButton>
          </S.ButtonContainer>
        </S.MessageInputContainer>
      )}
    </S.Container>
  )
}

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
import anexoIcon from '@assets/icons/anexo.svg'
import './styles.css'
import { useTenantData } from '@/context'
import s3Client from '@/s3Config'
import { PutObjectCommand } from '@aws-sdk/client-s3'

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

  let newBody = body.replace(/-- Anexo \d+: \[\d+\]/g, '');


  newBody = newBody.replace(/<br\/><br\/>/g, '');
  newBody = newBody.replace(
    /(https?:\/\/[\S]+contabostorage.com[\S]*)/g,
    `<div class="attachment-container"><img src=${anexoIcon} class="attachment-icon" alt="anexo" /><a href="$1" target="_blank" class="attachment-link">anexo</a></div>`
  );



  newBody = newBody.replace(/<br\/>/g, '');

  console.log('Processed HTML:', newBody);
  return <div dangerouslySetInnerHTML={{ __html: newBody }} />;
}





export function ViewTicket() {
  const { dataUser } = useLogin()
  const [ticketMessages, setTicketMessages] = useState<IMessage[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [loading, setLoading] = useState<boolean>(true)
  const [isClosed, setIsClosed] = useState<boolean>(false)
  const navigate = useNavigate()
  const { selectedTicketID } = useTicketID()
  const tenantData = useTenantData();
  const [files, setFiles] = useState<FileList | null>(null);

  const uploadFilesToS3 = async (files: FileList): Promise<string[]> => {
    const uploadedUrls: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const currentDate = await new Date();
      const formattedDate = await currentDate.toISOString().replace(/[-:.]/g, '');
      const fileNameWithTimestamp = await `${formattedDate}${file.name.replace(/\s/g, '-')}`;
      const params = {
        Bucket: 'stalopay',
        Key: `${tenantData.name}/ticket/${fileNameWithTimestamp}`,
        Body: file,
      };
      await s3Client.send(new PutObjectCommand(params));
      const imageUrl = `https://usc1.contabostorage.com/d6d39f0192924488b37d9be5d805e5e8:stalopay/${params.Key}`;
      uploadedUrls.push(imageUrl);
    }
    return uploadedUrls;
  };




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
          Body: message.Body
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
  }, [selectedTicketID])

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

 let imageUrls: string[] = [];
 if (files) {
   imageUrls = await uploadFilesToS3(files);
 }


 const formattedMessage = newMessage + "\n\n" + imageUrls.map(url => `${url}`).join("\n");

 const messageData = {
  message: formattedMessage,
};


      await axios.put(
        `${baseURL}tickets/message?id=${selectedTicketID}`,
        messageData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${dataUser?.token}`
          }
        }
      )
      fetchTicketDetails()
      setNewMessage('')
      setFiles(null);
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

  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const imageUrls = Array.from(files).map(file => URL.createObjectURL(file));
      setFiles(files);
    }
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
              <S.ContainerMessage>{formatMessageBody(message.Body)}</S.ContainerMessage>
              {message.Attachments.map((att, idx) => (
                <S.AttachmentContainer key={idx}>
                  <S.AttachmentIcon
                    src={anexoIcon}
                    alt="Attachment Icon"
                  />
                  <S.AttachmentLink
                    href={`data:text/plain;base64,${btoa(att.Content)}`}
                    download={att.Filename}
                  >
                    anexo
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


            <S.CloseTicketButton onClick={handleCloseTicket}>
              Encerrar Ticket
            </S.CloseTicketButton>
            <S.ContainerPhoto>
                  <S.HiddenFileInput
                    id="fileInput"
                    type="file"
                    multiple
                    onChange={onFileInputChange}
                  />
                  <S.FileInputLabel primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} htmlFor="fileInput">
                    <S.StyledUploadIcon primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} /> {files ? "Arquivo Anexado" : "Enviar Arquivos"}
                  </S.FileInputLabel>
                </S.ContainerPhoto>
                <S.BackButton onClick={() => navigate(-1)}>Voltar</S.BackButton>

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

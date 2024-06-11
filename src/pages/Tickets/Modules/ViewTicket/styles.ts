import styled from "styled-components";

interface IMessageBlockProps {
  fromUser: boolean;
}

export const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Arial', sans-serif;
`;

export const MessageBlock = styled.div<IMessageBlockProps>`
  max-width: 60%;
  background-color: ${props => props.fromUser ? '#dcf8c6' : '#fff'};
  border-radius: 8px;
  padding: 8px 12px;
  margin-bottom: 12px;
  align-self: ${props => props.fromUser ? 'flex-end' : 'flex-start'};
  border: 1px solid #eee;
  box-shadow: 0 1px 1px rgba(0,0,0,0.05);
  display: flex;
  justify-content: ${props => props.fromUser ? 'flex-end' : 'flex-start'};
  align-items: flex-start;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: #4a4a4a;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  margin: 0;
  color: #4a4a4a;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 10px;
  font-family: 'Arial', sans-serif;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: none;
`;

export const SendButton = styled.button`
 font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;

  padding: 8px 24px;
  border-radius: 4px;
  background: ${props => props.disabled ? '#ccc' : 'var(--color-primria, #3C0A6D)'};
  color: ${props => props.disabled ? '#999' : '#fff'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

export const CloseTicketButton = styled.button`



  border-radius: 4px;
border: 1px solid  #FF5733;

font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;

padding: 8px 24px;
color:  #FF5733;
background-color: transparent;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
`;

export const MessageInputContainer = styled.div`
  width: 100%;
  > div {
    display: flex;
    justify-content: flex-end;
    align-items: end;
  }
`;

export const AttachmentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const AttachmentIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const AttachmentLink = styled.a`
  text-decoration: none;
  color: #4a90e2;
  cursor: pointer;
`;


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  > * {
    margin-left: 16px;
  }
`;

export const BackButton = styled.button`
border-radius: 4px;
border: 1px solid var(--color-primria, #3C0A6D);

font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;

padding: 8px 24px;
color: var(--color-primria, #3C0A6D);
background-color: transparent;
`;

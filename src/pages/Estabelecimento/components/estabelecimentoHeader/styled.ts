import styled from 'styled-components';

interface Color {
  primary: string;
  secundary: string;
}


export const Container = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 38px;

@media (max-width: 600px){
  flex-direction: column;
  display: inline-flex;
  gap: 20px;
  margin-bottom: 26px;
}






`;

export const Button = styled.button<Color>`
  display: flex;
  padding: 14px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;


color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 15.566px;


border-radius: 4px;
background: ${(props) => props.primary};
white-space: nowrap;
`;

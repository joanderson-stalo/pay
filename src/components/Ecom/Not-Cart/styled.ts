import styled from 'styled-components';

export const NotCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  height: 80vh;

  margin: 20px;
  text-align: center;

  > svg {
    color: #3C0A6D;
    width: 64px;
height: 64px;
  }

  > p{
    color:  #3C0A6D;
text-align: center;
font-size: 32px;
font-style: normal;
font-weight: 600;
line-height: 40px;
letter-spacing: 0.5px;
  }

  > button {
    width: 253px;
    height: 44px;
padding: 8px 24px;

border-radius: 4px;
background: var(--color-primria, #3C0A6D);

color: #FFF;

font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 15.566px;
text-transform: uppercase;
  }
`;

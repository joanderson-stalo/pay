import styled from "styled-components";

interface Color {
  primary: string | undefined
  secundary:string | undefined
}
export const Wrapper = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 600px) {
      max-width: 252px;
  }
`;

export const ContainerCardLog = styled.div`
  width: 100%;
  max-width: 320px;
  padding: 16px;
  gap: 8px;
  border-radius: 4px;
  background: #FFF;
  border: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
      max-width: 252px;
  }
`;

export const CardHeading = styled.h3`
  color: #3d4449;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  padding: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:not(:last-child) {
    border-bottom: 1px solid #e9ecef;
  }


  @media (max-width: 600px) {
    font-size: 12px;
  }

`;

export const ButtonLogCard = styled.button<Color>`
width: 100%;
padding: 8px 24px;
border-radius: 4px;
border: 1px solid ${(props) => props.primary};
background-color: transparent;

display: flex;
align-items: center;
justify-content: center;

color: ${(props) => props.primary};
font-size: 12px;


line-height: 15.566px;

`

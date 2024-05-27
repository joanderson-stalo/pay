import styled from "styled-components";

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
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);

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

export const ButtonLogCard = styled.button`
width: 100%;
padding: 8px 24px;
border-radius: 4px;
border: 1px solid  #3D4449;
background-color: transparent;

color: #3D4449;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 15.566px;
text-transform: uppercase;
`

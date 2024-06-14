
import styled from "styled-components";

interface ContainerGraficoProps {
  isShow: boolean;
}


export const ContainerGrafico = styled.div<ContainerGraficoProps>`
  width: ${(props) => (props.isShow ? '68%' : '100%')};

  height: 328px;

  border-radius: 12px;
  background: #FFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 12px;
  }

  @media (max-width: 1100px) {
    padding: 10px;
  }

  @media (max-width: 900px) {
    width: 100%;
  }

`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 20px;

  > p {
    color: #2C2C2C;
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 1200px) {
    margin-left: 18px;

    > p {
      font-size: 13px;
      line-height: 18px;
    }
  }

  @media (max-width: 1100px) {
    margin-left: 16px;

    > p {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

interface Color {
  primary: string;
  secundary: string;
}

export const Bolinha = styled.span<Color>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color:  ${(props) => props.primary};
  display: inline-block;
  margin-right: 5px;
  vertical-align: middle;

  @media (max-width: 1200px) {
    width: 13px;
    height: 13px;
    margin-right: 4px;
  }

  @media (max-width: 1100px) {
    width: 12px;
    height: 12px;
    margin-right: 3px;
  }
`;

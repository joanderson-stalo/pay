
import styled from "styled-components";

export const UsefulLinkCardContainer = styled.div`
  display: flex;
  gap: 22px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

interface Color {
  primary: string;
  secundary: string;
}

export const IconSquare = styled.span<Color>`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background:  ${(props) => props.primary};
  margin-top: 8px;
`;

export const LinkTitle = styled.h3<Color>`
  color:  ${(props) => props.primary};
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  word-wrap: break-word;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const LinkDescription = styled.p`
  color: #A0A0A0;
  font-size: 16px;
  font-weight: 500;
  word-wrap: break-word;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const LinkUrl = styled.a`
  color: #2BC6F6;
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;
  overflow-wrap: break-word;
  word-break: break-all;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;


export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  word-wrap: break-word;
`;

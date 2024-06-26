
import styled from "styled-components";

interface Color {
  primary: string;
  secundary: string;
}

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  border-radius: 8px;
  background: var(--Sys---Neutral-04, #FFF);
  border: 1px solid rgba(0, 0, 0, 0.1);
  thead {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 1px;
      background-color: #E9ECEF;
      box-shadow: 0px 1px 0px 0px #E9ECEF;
    }
  }
  @media (max-width: 1200px) {
    border-spacing: 0 8px;
  }
  @media (max-width: 1100px) {
    border-spacing: 0 7px;
  }
  @media (max-width: 900px) {
    display: none;
    border-spacing: 0 5px;
  }

`;

export const TableHeader = styled.th`
  color: var(--light-dark, #343A40);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  text-align: start;
  line-height: 20.824px;
  padding: 8px 16px;
  @media (max-width: 1200px) {
    font-size: 12px;
  }
  @media (max-width: 1100px) {
    font-size: 11px;
  }
  @media (max-width: 900px) {
    font-size: 10px;
  }
  @media (max-width: 600px) {
    font-size: 9px;
  }
`;

export const TableData = styled.td`
  color: var(--light-secondary, #6C757D);
  font-size: 12px;
  font-weight: 400;
  line-height: 20.824px;
  padding: 8px 16px;
  text-align: start;
  vertical-align: middle;


  @media (max-width: 1200px) {
    font-size: 12px;
    padding: 7px;
  }
  @media (max-width: 1100px) {
    font-size: 11px;
    padding: 6px;
  }
  @media (max-width: 900px) {
    font-size: 10px;
    padding: 5px;
  }
  @media (max-width: 600px) {
    display: block;
    width: 100%;
    font-size: 9px;
    padding: 4px;
  }
`;

export const StyledImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  @media (max-width: 900px) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 600px) {
    width: 25px;
    height: 25px;
  }
`;

export const ButtonRetrieve = styled.button`
 color: var(--color-neutra-ttulos, #202124);
background-color: transparent;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
text-decoration-line: underline;
`;

export const ButtonRemove = styled(ButtonRetrieve)`
  color: #EB001B;
`;

export const TableRow = styled.tr`
  height: 35.377px;
  &:hover {
    background-color: #F5F4F4;
  }
  @media (max-width: 600px) {
    height: auto;
    display: block;
    margin-bottom: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
  }
`;

export const TagYou = styled.span<Color>`
  border-radius: 4px;
  background: ${(props) => props.primary};
  padding: 4px 8px;
  color: var(--foundation-brand-02-light, #E6F8FD);
  text-align: center;
  font-size: 12px;
  font-weight: 600;

  @media (max-width: 1200px) {
    
  }
  @media (max-width: 1100px) {
    
  }
  @media (max-width: 900px) {
    font-size: 9px;
    padding: 1px 5px;
  }
  @media (max-width: 600px) {
    font-size: 8px;
    padding: 1px 4px;
  }
`;

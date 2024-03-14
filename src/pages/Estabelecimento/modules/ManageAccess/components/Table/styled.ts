
import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
  border-radius: 8px;
  background: var(--Sys---Neutral-04, #FFF);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

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
`;

export const TableHeader = styled.th`
  color: var(--light-dark, #343A40);
  font-size: 13.252px;
  font-style: normal;
  font-weight: 500;
  line-height: 20.824px;
`;

export const TableData = styled.td`
  color: var(--light-secondary, #6C757D);
  font-size: 13.252px;
  line-height: 20.824px;
  padding: 8px;
  text-align: center;
  vertical-align: middle;



`;

export const StyledImage = styled.img`

  display: block;
  margin-left: auto;
  margin-right: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const ButtonRetrieve = styled.button`
  color: #5A6ACF;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 14.128px;
  background: transparent;
  letter-spacing: 0.353px;
`;

export const ButtonRemove = styled(ButtonRetrieve)`
  color: #EB001B;
`;

export const TableRow = styled.tr`
  height: 35.377px;

  &:hover {
    background-color: #F5F4F4;
  }
`;


interface Color {
  primary: string;
  secundary: string;
}

export const TagYou = styled.span<Color>`
  border-radius: 4px;
background: ${(props) => props.secundary};
padding: 1px 8px;

color: var(--foundation-brand-02-light, #E6F8FD);
text-align: center;
font-size: 12px;
font-weight: 600;



`

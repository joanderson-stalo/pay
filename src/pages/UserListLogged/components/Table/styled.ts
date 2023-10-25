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
  @media (max-width: 1200px) {
    border-spacing: 0 8px;
  }
  @media (max-width: 1100px) {
    border-spacing: 0 7px;
  }
  @media (max-width: 900px) {
    border-spacing: 0 5px;
  }
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    border-spacing: 0;
    background: none;
  box-shadow: none;

    > thead {
      display: none;
    }

    >tbody {
      width: 58%;
    }
  }
`;

export const TableHeader = styled.th`
  color: var(--light-dark, #343A40);
  font-size: 13.252px;
  font-style: normal;
  font-weight: 500;
  line-height: 20.824px;
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
  font-size: 13.252px;
  line-height: 20.824px;
  padding: 8px;
  text-align: center;
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
  color: #5A6ACF;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 14.128px;
  background: transparent;
  letter-spacing: 0.353px;
  @media (max-width: 900px) {
    font-size: 10px;
  }
  @media (max-width: 600px) {
    font-size: 9px;
  }
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

export const TagYou = styled.span`
  border-radius: 4px;
  background: #00A3D7;
  padding: 1px 8px;
  color: var(--foundation-brand-02-light, #E6F8FD);
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  @media (max-width: 1200px) {
    font-size: 11px;
    padding: 1px 7px;
  }
  @media (max-width: 1100px) {
    font-size: 10px;
    padding: 1px 6px;
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

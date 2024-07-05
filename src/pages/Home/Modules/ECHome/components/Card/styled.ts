import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 12px;
background: #FFF;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  width: 100%;
  max-width: 260px;
  padding:  25px 20px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 11px;

  > p{
    color:  #383838;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 14.576px;
font-weight: 500;
line-height: 26.723px;
  }

  > span{
    color:  #08BBE9;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 24.293px;
font-weight: 700;
line-height: 26.723px;
  }
`

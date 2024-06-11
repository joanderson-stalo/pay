import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 12px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 260px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 10px;

  > p {
    color: #383838;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 14.576px;
    font-weight: 500;
    line-height: 26.723px;
  }

  > span {
    color: #08BBE9;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 24.293px;
    font-weight: 700;
    line-height: 26.723px;
  }

  @media (max-width: 1200px) {
    max-width: 240px;
    gap: 9px;

    > p {
      font-size: 13px;
    }

    > span {
      font-size: 22px;
    }
  }

  @media (max-width: 900px) {
    max-width: 210px;
    padding: 15px 15px;
    gap: 8px;

    > p {
      font-size: 12px;
      line-height: 24px;
    }

    > span {
      font-size: 20px;
    }
  }

  @media (max-width: 600px) {
    max-width: 160px;
    padding: 7px 7px;
    gap: 4px;

    > p, > span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    > p {
      font-size: 8.5px;
      line-height: 18px;
    }

    > span {
      font-size: 15px;
    }
  }
`;

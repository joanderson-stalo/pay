import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 16px;
  background: rgba(251, 251, 251, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 64px 104px;

  width: 592px;
height: 530px;

@media (max-width: 900px) {
  padding: 32px 52px;
  width:100%;
  height: auto;
}
`;

export const ContentIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > img {
    width: 56px;
    height: 56px;
  }

  > h2 {
    font-family: 'Public Sans';
    color: #10104f;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 50px;
    margin-top: 24px;
  }

  @media (max-width: 900px) {
    > h2{
      font-size: 24px;
    }
  }
`;

export const ContainerButton = styled.div<{ primaryColor?: string }>`
  display: flex;
  flex-direction: column;
  gap: 24px;

  > div {
    span {
      color: #3d4449;
      text-align: center;
      font-family: 'Public Sans';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.5px;
    }

    aside {
      border-radius: 4px;
      border: 1px solid #d1d1d1;
      background: #efefef;

      width: 384px;

      h3 {
        color: #3d4449;
        font-family: 'Public Sans';
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        margin: 0;
        padding: 0;
        line-height: 24px;
        letter-spacing: 0.5px;
        text-align: center;
        padding: 10px;
      }
    }
  }

  > button {
    border-radius: 4px;
    background: ${props => props.primaryColor};
    padding: 20px 33px;
    box-sizing: border-box;
    border: none;
    width: 384px;
    color: #e3e3e3;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'Public Sans';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 15.566px;
    text-transform: uppercase;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    > div {
      aside{
        width:100%;
height: auto;
      }


    }
    button{
        width:100%;
height: auto;
      }
}
`;

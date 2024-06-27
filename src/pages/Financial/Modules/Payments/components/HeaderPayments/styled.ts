import styled from 'styled-components';
interface Color {
  primary: string;
  secundary: string;
}

  export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;

    @media (max-width: 600px){
      gap: 20px;
    }


  `;

  export const Context = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
    justify-content: space-between;
  `;

  export const Button = styled.button<Color>`
    border-radius: 4px;
    background: #3C0A6D;
    padding: 14px 24px;
  color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 15.566px;

  `;

  export const Title = styled.h2<Color>`
    color:${(props) => props.secundary};
    font-size: 24px;
    font-weight: 700;
    line-height: normal;

    @media (max-width: 600px) {
  font-size: 16px;
}
  `;

  export const Input = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 525px;
    height: 44px;
    border-radius: 4px;
    border: 1px solid #E2E2E2;
    background: #FFF;
    padding: 10px 16px;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #9B959F;
    padding-right: 15px;

    > input {
          width: 100%;
          padding-right: 40px;

          color:  #9B959F;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.5px;
    }

    .search-icon {
      position: absolute;
      right: 20px;
      color: #000;
    }
  `;

  export const SearchIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9B959F;
    font-size: 21px;
    cursor: pointer;
    svg {
    width: 21.429px;
  height: 21.429px;
  }
  `;

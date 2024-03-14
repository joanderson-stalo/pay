
import styled from "styled-components";

interface Color {
  primary: string;
  secundary: string;
}

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background:  #3c0a6d;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
`;

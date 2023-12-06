import styled from "styled-components";

export const ContainerDefaultHome = styled.div`
  display: flex;
`
export const ContainerSidebarDefault = styled.div`
 position: fixed;
  width: 100%;
  max-width: 240px;
  height: 100vh;
`
export const ContainerContext = styled.div<{ isCondensed: boolean }>`
  width: 100%;
  padding-left: ${({ isCondensed }) => isCondensed ? '240px' :  '96px'};

  @media (max-width: 1100px) {
    padding-left: 0px;
  }
`;

export const ContextHome = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.white_sys};
  /* height: 100%; */
`

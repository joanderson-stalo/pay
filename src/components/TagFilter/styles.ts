import styled from "styled-components";

export const ContainerTagFilter = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    gap: 16px;

    > h3 {
        color: #B1B1B1;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.5px;
    }

    @media (max-width: 600px){
      flex-direction: column;
     align-items: start;
    }
`;

export const BalloonContainer = styled.div`
    padding: 4px 16px;
    border-radius: 4px;
    gap: 8px;
    background: rgba(60, 10, 109, 0.15);

    display: flex;
    align-items: center;

    > h4 {
        color: #3D4449;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.5px;
    }

    > button {
        background-color: transparent;
        padding-top: 6px;
        svg {
            width: 16px;
            height: 16px;

        }
    }
`;

import { UploadSimple } from "@phosphor-icons/react";
import styled from "styled-components";

export const ContainerStep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const ContextStepContainer = styled.div`
 display: flex;
  flex-direction: column;
align-items: center;

`

export const ContextStep = styled.div`
    background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

margin-top: 30px;
margin-bottom: 32px;

width: 900px;
padding: 22px 39px 0px 39px;
  /* overflow: auto;
::-webkit-scrollbar {
    display: none;
  } */
`

export const TitleStep = styled.h2`
  font-weight: 700;
font-size: 18px;
line-height: 23px;
color: #7D7D7D;
`

export const Line = styled.div`
  border: 1px solid #A0A0A0;
  margin-top: 15px;
`

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 53px;
  margin-left: 50px;
  margin-right: 50px;


`

export const ContainerInput = styled.section`
    display: flex;
justify-content: space-between;
gap: 50px;

`


export const ContainerInput2 = styled.section`
    width: 215px;

    > button {
        background: transparent;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-weight: 400;
font-size: 13px;
line-height: 23px;

letter-spacing: 0.5px;

color: #665B6D;
    }
`

export const ButtonAvançar = styled.button`
  width: 109px;
height: 35px;

background: #00A3D7;
border: 0.5px solid #0086ED;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #FFFFFF;

:disabled {
    background-color: gray;
    color: rgba(255, 255, 255, 0.5);
    border: none;
  }

`


export const ButtonVoltar = styled.button`
  width: 109px;
height: 35px;


background: #FFFFFF;
border: 0.5px solid #F5F4F4;
border-radius: 5px;

font-weight: 500;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.5px;

color: #5A6ACF;

`


export const ContainerButton = styled.div`
display: flex;
gap: 20px;
align-self: flex-end;
margin-bottom: 100px;

`

export const HiddenFileInput = styled.input.attrs({ type: "file" })`
  display: none;
`;

export const FileInputLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 18px;

  padding: 12px 23px;
  border-radius: 4px;
  background: #E6F8FD;
  cursor: pointer;

  color: var(--foundation-brand-02-normal-hover, #07A8D2);

font-size: 14px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0.5px;

  &:hover {
    background: #d1eaf3;
  }
`;

export const StyledUploadIcon = styled(UploadSimple)`
  color: #07A8D2;
  width: 30px;
  height: 30px;

`;

export const ContainerPhoto = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

`



export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    thead {
        tr {
            background: var(--foundation-brand-01-normal, #10104F);

            th {
                padding: 8px 12px;
                color: var(--foundation-white-light, #FDFDFD);
                text-align: center;
                border-bottom: 2px solid #fff;
                font-feature-settings: 'clig' off, 'liga' off;
                font-family: Poppins, sans-serif;
                font-size: 10.99px;
                font-style: normal;
                font-weight: 700;
                line-height: 17.27px;
            }
        }
    }

    tbody {
        tr {
            td {
                padding: 8px 12px;
                color: var(--light-secondary, #6C757D);
                border-bottom: 1px solid #ddd;
                text-align: center;
                vertical-align: middle;
                font-feature-settings: 'clig' off, 'liga' off;
                font-family: Poppins, sans-serif;
                font-size: 12.204px;
                font-style: normal;
                font-weight: 400;
                line-height: 24.408px;

                input {
                    width: 86px;
                    height: 26px;
                    padding: 8px;
                    border-radius: 2.371px;
                    border: 0.593px solid var(--foundation-neutral-light-active, #D7D7D7);
                    background: var(--foundation-white-light, #FDFDFD);
                    color: var(--foundation-neutral-light-active, #5E5E5E);
                    font-family: Poppins, sans-serif;
                    font-size: 9.298px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 14.226px;
                    letter-spacing: 0.296px;
                    text-align: center;
                    -moz-appearance: textfield;


                    &::placeholder {
        text-align: right;
    }

                    &::-webkit-inner-spin-button,
                    &::-webkit-outer-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }
                }
            }
        }
    }
`;



export const TableAndButtonsContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;

  > button {
    width: 118px; // Set a specific width
    height: 55px; // Set a specific height
    padding: 6px 38px; // You can keep this if you want internal spacing, but it might interfere with the width/height settings
    background: var(--foundation-brand-02-light-hover, #DAF5FC);
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--foundation-brand-02-normal, #08BBE9);
    font-size: 12px;
    font-weight: 700;
    line-height: 15.566px;

    img {
      width: 42.131px;
      height: 42.131px;
      margin: auto; // Centers the image if there's space around it
    }
  }

  button.not-selected {
    mix-blend-mode: luminosity;
    background: #F7F7F7;
  }
`;



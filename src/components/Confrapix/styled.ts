import styled from "styled-components";

export const Container = styled.div`
width: 100%;

`

export const ContainerInput = styled.div`


`

export const Input = styled.input`

  border-radius: 4px;
  border: 1px solid  #D1D1D1;
  height: 56px;
  width: 100%;

  padding: 14px 25px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;

  @media (max-width: 900px) {
    max-width: 100%;
  }


`

export const Label = styled.div`
color:  #202124;
font-size: 14px;
font-weight: 400;
line-height: 24px; /* 171.429% */
letter-spacing: 0.5px;
display: flex;

>span{

font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
color: #C81B1B;

}

`

export const TextAreaPix = styled.textarea`
width: 100%;
border-radius: 4px;
border: 1px solid  #D1D1D1;
padding: 14px 25px;
resize: none;

  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;


`

export const SelectOP = styled.select`
width: 100%;
border-radius: 4px;
border: 1px solid  #D1D1D1;
padding: 14px 25px;
resize: none;

  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;


`

export const ContainerTextArea = styled.div`

`



export const customStyles = (hasError: boolean) => ({
  control: (base: any, state: any) => ({
    ...base,
    border: hasError ? '2px solid red' : '1px solid #D1D1D1',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #D1D1D1',
      boxShadow: 'none',
    },
    borderRadius: '4px',
    width: '100%',
    height: '56px',
    padding: '0px 4px 0px 20px',
    transition: 'none',

  }),

  singleValue: (base: any, state: any) => ({
    ...base,
    display: 'flex',
    alignItems: 'center',
    transform: 'translateY(-20%)',
    color: '#A0A0A0',
    fontSize: '14px'


  }),
  input: (base: any, state: any) => ({
    ...base,
    display: 'flex',
    alignItems: 'center',
    transform: 'translateY(-20%)',
    boxShadow: 'none',
    outline: 'none',
    fontSize: '14px'
    
  }),
  placeholder: (base: any, state: any) => ({
    ...base,
    display: 'flex',
    alignItems: 'center',
    transform: 'translateY(-20%)',
    color: hasError ? 'red' : '#A0A0A0',
    fontSize: '12px'
  }),
  dropdownIndicator: (base: any, state: any) => ({
    ...base,
    display: 'flex',
    alignItems: 'center',
    transform: 'translateY(-6%)',
  }),
  indicatorSeparator: (base: any, state: any) => ({
    ...base,
    display: 'none',
  }),
  option: (styles: any, { isFocused, isSelected }: any) => {
    return {
      ...styles,
      backgroundColor: null,
      color: null,
      cursor: '',
      boxShadow: 'none',
      fontSize: '14px'
    };
  },
  menu: (base: any, state: any) => ({
    ...base,
    '& > div': {
      maxHeight: '100px',
      overflowY: 'auto',
    }
  }),
});


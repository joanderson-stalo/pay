export const customStyles = (hasError: boolean) => ({
  control: (base: any, state: any) => ({
    ...base,
    border: hasError ? '2px solid red' : '1px solid #E2E2E2',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #E2E2E2',
      boxShadow: 'none',
    },
    borderRadius: '4px',
    width: '100%',
    height: '50px',
    padding: '10px 4px 10px 20px',
    transition: 'none',

  }),

  singleValue: (base: any, state: any) => ({
    ...base,
    display: 'flex',
    alignItems: 'center',
    transform: 'translateY(-20%)',
    color: '#A0A0A0',
  }),
  input: (base: any, state: any) => ({
    ...base,
    display: 'flex',
    alignItems: 'center',
    transform: 'translateY(-20%)',
    boxShadow: 'none',
    outline: 'none',

  }),
  placeholder: (base: any, state: any) => ({
    ...base,
    display: 'flex',
    alignItems: 'center',
    transform: 'translateY(-20%)',
    color: hasError ? 'red' : '#A0A0A0',
  }),
  dropdownIndicator: (base: any, state: any) => ({
    ...base,
    display: 'flex',
    alignItems: 'center',
    transform: 'translateY(-16%)',
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

    };
  },
});

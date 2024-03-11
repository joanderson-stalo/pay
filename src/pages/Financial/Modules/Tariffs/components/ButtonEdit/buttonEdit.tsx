import React, { useRef, useState, useEffect } from 'react';
import { ButtonClose, EditButton, EditInput } from './styled';
import closeX from '@assets/icons/X.svg'
import { useLabelBilling } from '../../hooks/useLabelBilling';
import { useFilterBilling } from '../../hooks/useFilterBilling';


export function EditableButton() {
  const { label, setLabel } = useLabelBilling();
  const [isEditing, setIsEditing] = useState(false);
  const {setFalse } = useFilterBilling();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
    }
  };

  const handleXClick = async (event: React.MouseEvent) => {
    event.stopPropagation();
    localStorage.removeItem('@billingStartDate');
    localStorage.removeItem('@billingEndDate');
    localStorage.removeItem('@billingEstablishment');
    localStorage.removeItem('@billingLicensed');
    await setFalse();
};



  useEffect(() => {
    const handleDocumentMouseDown = (event: MouseEvent) => {
      if (isEditing && inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsEditing(false);
      }
    };

    if (isEditing) {
      document.addEventListener('mousedown', handleDocumentMouseDown);
    } else {
      document.removeEventListener('mousedown', handleDocumentMouseDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleDocumentMouseDown);
    };
  }, [isEditing]);

  return isEditing ? (
    <EditInput
      ref={inputRef}
      type="text"
      onChange={handleInputChange}
      onKeyDown={handleInputKeyDown}
      value={label}
      maxLength={12}
      autoFocus
    />
  ) : (
    <>
      <EditButton onClick={handleButtonClick}>
        {label}
        <ButtonClose onClick={handleXClick}><img src={closeX} alt="" /></ButtonClose>
      </EditButton>
    </>
  );
};

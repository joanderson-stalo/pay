import React, { useState, useRef, useEffect } from 'react';

interface EditableButtonProps {
  defaultLabel: string;
}

const EditableButton: React.FC<EditableButtonProps> = ({ defaultLabel }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [label, setLabel] = useState(defaultLabel);

  const inputRef = useRef<HTMLInputElement | null>(null);

  // detectar se um clique ocorreu fora do elemento de entrada
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsEditing(false);
      }
    }

    // adicionar quando montado
    document.addEventListener("mousedown", handleClickOutside);
    // retornar função para remover quando desmontado
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  return isEditing ? (
    <input
      ref={inputRef}
      type="text"
      onChange={handleInputChange}
      onKeyDown={handleInputKeyDown}
      value={label}
      autoFocus
    />
  ) : (
    <button onClick={handleButtonClick}>{label}</button>
  );
};

export default EditableButton;

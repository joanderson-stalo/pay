import React, { useState } from "react";
import { Funnel, X } from "@phosphor-icons/react";
import { ButtonFilter, CloseButton, ContainerChildren, FilterModalContainer, Wrapper } from "./styled";
import { useTenantData } from "@/context";

interface IBtnFilter {
  onClick: () => void;
  disabled?: boolean
}

export function BtnFilterModal({ onClick, children, disabled  }: React.PropsWithChildren<IBtnFilter>) {
  const [isOpen, setIsOpen] = useState(false);
  const tenantData = useTenantData();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseModal = () => {
    toggleModal();
  };

  return (
    <>
      <Wrapper>
        <ButtonFilter
          isActive={isOpen}
          primary={tenantData.primary_color_identity}
          secundary={tenantData.secondary_color_identity}
          type="button"
          onClick={toggleModal}
        >
          <Funnel />Filtrar
        </ButtonFilter>
        {isOpen && (
          <FilterModalContainer>
            <CloseButton onClick={handleCloseModal}><X /></CloseButton>
            <ContainerChildren   primary={tenantData.primary_color_identity}
          secundary={tenantData.secondary_color_identity}>
              {children}
              <button disabled={disabled} type="button" onClick={() => { onClick(); handleCloseModal(); }}>Filtrar</button>
            </ContainerChildren>
          </FilterModalContainer>
        )}
      </Wrapper>
    </>
  );
}

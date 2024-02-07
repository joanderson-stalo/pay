

import { UsefulLinkCard } from './components/UsefulLinkCard';
import { mockUsefulLinkCardsProps } from './dados';
import {
  ContainerForm,
  ContainerStep,
  ContextStep,
  ContextStepContainer,
  Line,
  Title,
  TitleStep
} from './styled';


export function Documents() {


  return (
    <>


        <ContainerStep>
        <Title>Documentos</Title>
          <ContextStepContainer>
            <ContextStep>
              <TitleStep>Links úteis</TitleStep>
              <Line />
              <ContainerForm>
              {mockUsefulLinkCardsProps.map((cardProps, index) => (
              <UsefulLinkCard key={index} {...cardProps} />
            ))}
              </ContainerForm>
            </ContextStep>
          </ContextStepContainer>
        </ContainerStep>

    </>
  );
}

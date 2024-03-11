import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TitleH } from '@/components/Title/title';
import { UsefulLinkCard } from './components/UsefulLinkCard';
import { useLogin } from '@/context/user.login';
import {
  ContainerForm,
  ContainerStep,
  ContextStep,
  ContextStepContainer,
  Line,
  Title,
  TitleStep
} from './styled';
import { Loading } from '@/components/Loading/loading';

interface UsefulLink {
  title: string;
  description: string;
  url: string;
}

export function Documents() {
  const { dataUser } = useLogin();
  const [usefulLinks, setUsefulLinks] = useState<UsefulLink[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (dataUser && dataUser.token) {
          const response = await axios.get('https://api-pagueassim.stalopay.com.br/configs/getConfigsWL', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${dataUser.token}`
            }
          });
          const data = response.data;
          if (data && data.configs && data.configs.wl_useful_links) {
            setUsefulLinks(data.configs.wl_useful_links);
          }
        }
      } catch (error) {
        console.error('Erro ao buscar links úteis:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dataUser]);

  return (
    <>
      {loading && <Loading />}
      <ContainerStep>
        <TitleH title='Documentos' />
        <ContextStepContainer>
          <ContextStep>
            <TitleStep>Links úteis</TitleStep>
            <Line />
            <ContainerForm>
              {usefulLinks.map((link, index) => (
                <UsefulLinkCard
                  key={index}
                  title={link.title}
                  description={link.description}
                  url={link.url}
                />
              ))}
            </ContainerForm>
          </ContextStep>
        </ContextStepContainer>
      </ContainerStep>
    </>
  );
}

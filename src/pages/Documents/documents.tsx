import { useEffect, useState, useCallback } from 'react';
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
  TitleStep
} from './styled';
import { Loading } from '@/components/Loading/loading';
import { baseURL } from '@/config/color';
import { NoteData } from '@/components/NoteData/noteData';

interface UsefulLink {
  title: string;
  description: string;
  url: string;
}

export function Documents() {
  const { dataUser } = useLogin();
  const [usefulLinks, setUsefulLinks] = useState<UsefulLink[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      if (dataUser && dataUser.token) {
        const response = await axios.get(`${baseURL}configs/getConfigsWL`, {
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
      console.error('Erro ao buscar dados:', error);
    } finally {
      setLoading(false);
    }
  }, [dataUser]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <ContainerStep>
        <TitleH title='Documentos' />
        <ContextStepContainer>
          <ContextStep>
            <TitleStep>Links úteis</TitleStep>
            <Line />
            <ContainerForm>
              {usefulLinks.length > 0 ? (
                usefulLinks.map((link, index) => (
                  <UsefulLinkCard
                    key={index}
                    title={link.title}
                    description={link.description}
                    url={link.url}
                  />
                ))
              ) : (
                <NoteData />
              )}
            </ContainerForm>
          </ContextStep>
        </ContextStepContainer>
      </ContainerStep>
    </>
  );
}

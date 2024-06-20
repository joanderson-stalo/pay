import React, { useState, useEffect } from 'react';
import { TitleH } from '@/components/Title/title';
import * as S from './styled';
import { useTicketID } from '@/context/id/ticketId';
import { baseURL } from '@/config/color';
import axios from 'axios';
import { useLogin } from '@/context/user.login';
import { Loading } from '@/components/Loading/loading';
import { DataTable } from './components/dataTable';
import { ArrowBack } from '@/components/BtnArrowBack/btnArrowBack';

export function LogDetail() {
    const { selectedTicketID } = useTicketID();
    const { dataUser } = useLogin();
    const [logDetail, setLogDetail] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchLog = async () => {
        setLoading(true);
        let apiUrl = `${baseURL}activitylog?id=${selectedTicketID}`;

        try {
            const response = await axios.get(apiUrl, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${dataUser?.token}`
                }
            });

            setLogDetail(response.data.logs);

        } catch (error) {
            console.error('Error fetching log details:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLog();
    }, [selectedTicketID]);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <S.Container>
              <S.ContainerTitle>
                <ArrowBack/>
                <TitleH title="Log - Detalhes" />
              </S.ContainerTitle>

                {logDetail && <DataTable item={logDetail[0]} />}
            </S.Container>
        </>
    );
}

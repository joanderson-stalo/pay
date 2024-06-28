import { ChangeEvent, useState, useEffect } from 'react';
import * as S from './styled';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';
import axios from 'axios';
import { TableSpreadSheet } from './Components/TableSpreadSheet/tableSpreadSheet';
import { CardSpreadsheet } from './Mobile/CardSpreadsheet/cardSpreadsheet';
import { useLogin } from '@/context/user.login';
import { CustomInput } from '@/components/Input/input';
import { baseURL } from '@/config/color';
import { useNavigate } from 'react-router-dom';
import { Loading } from '@/components/Loading/loading';
import { useTenantData } from '@/context';

type SpreadsheetData = {
  ID_EC: string | number;
  ESTABELECIMENTO: string;
  ID_LA: string | number;
  LICENCIADO: string;
  SN: string | number;
  TIPO: string;
  Valor: string | number;
  Observação: string;
};

export function ImportSpreadsheetBilling() {
  const [jsonData, setJsonData] = useState<SpreadsheetData[]>([]);
  const [fileSelected, setFileSelected] = useState<boolean>(false);
  const [referenceDate, setReferenceDate] = useState<string>('');
  const [billingDate, setBillingDate] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const { dataUser } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    const formattedLastDayOfLastMonth = formatDate(lastDayOfLastMonth);
    setReferenceDate(formattedLastDayOfLastMonth);

    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    nextMonth.setDate(15);
    const formattedFifteenthOfNextMonth = formatDate(nextMonth);
    setBillingDate(formattedFifteenthOfNextMonth);
  }, []);

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const verifyFileFormat = (sheet: XLSX.WorkSheet): boolean => {
    const requiredColumns: string[] = [
      'ID_EC',
      'ESTABELECIMENTO',
      'ID_LA',
      'LICENCIADO',
      'SN',
      'TIPO',
      'Valor',
      'Observação',
    ];

    const rawData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    if (!Array.isArray(rawData) || rawData.length === 0 || !Array.isArray(rawData[0])) {
      return false;
    }

    const sheetColumns: string[] = (rawData[0] as string[]).map(column => column.trim());
    return requiredColumns.every(column => sheetColumns.includes(column));
  };

  const validateData = (data: SpreadsheetData[]): boolean => {
    return data.every(entry => Object.values(entry).every(value => value !== ''));
  };

  const processFile = (data: string): void => {
    const workbook: XLSX.WorkBook = XLSX.read(data, { type: 'binary' });
    const sheetName: string = workbook.SheetNames[0];
    const sheet: XLSX.WorkSheet = workbook.Sheets[sheetName];

    if (!verifyFileFormat(sheet)) {
      setFileSelected(false);
      Swal.fire({
        icon: 'error',
        title: 'Formato inválido',
        text: 'O formato do arquivo não corresponde ao esperado.',
      });
      return;
    }

    let rawData: any[] = XLSX.utils.sheet_to_json(sheet, {
      blankrows: false,
      defval: '',
    });

    const cleanedData: SpreadsheetData[] = rawData.map((entry) =>
      Object.fromEntries(
        Object.entries(entry).filter(([key]) => !key.startsWith('__EMPTY'))
      )
    ) as SpreadsheetData[];

    if (!validateData(cleanedData)) {
      setFileSelected(false);
      Swal.fire({
        icon: 'error',
        title: 'Dados incompletos',
        text: 'Alguns campos obrigatórios estão vazios.',
      });
      return;
    }

    setJsonData(cleanedData);

    Swal.fire({
      icon: 'success',
      title: 'Dados importados com sucesso!',
      text: 'Os dados do arquivo foram importados com sucesso.',
    });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const fileInput = event.target;
    const file = fileInput.files?.[0];

    if (file) {
      setFileSelected(true);

      Swal.fire({
        icon: 'info',
        title: 'Processando...',
        text: 'Aguarde enquanto o arquivo está sendo processado.',
        timer: 1000,
        showConfirmButton: false,
      });

      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const data = e.target?.result as string;
        setTimeout(() => processFile(data), 1000);
      };

      reader.onerror = (error: ProgressEvent<FileReader>) => {
        console.error('Erro na leitura do arquivo:', error);
        setFileSelected(false);

        Swal.fire({
          icon: 'error',
          title: 'Erro na importação',
          text: 'Ocorreu um erro ao importar os dados do arquivo.',
        });
      };

      reader.readAsBinaryString(file);
      fileInput.value = '';
    } else {
      setFileSelected(false);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      const mappedData = jsonData.map(entry => ({
        seller_id: entry.ID_EC,
        responsible_seller_id: entry.ID_LA,
        acquire_id: entry.ID_LA,
        amount: parseFloat(entry.Valor.toString()),
        serial_terminal: entry.SN.toString(),
        payable_by: 'EC',
        status: 'Ativo',
        operation_type: entry.TIPO.toLowerCase() === 'crédito' ? 'credit' : entry.TIPO,
        comment: entry.Observação,
        description: entry.Observação,
        type: entry.TIPO,
        reference_date: referenceDate,
        billing_date: billingDate
      }));

      const response = await axios.post(
        `${baseURL}tariffs/create`,
        { tariffs: mappedData },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${dataUser?.token}`
          }
        }
      );

      if (response) {
        Swal.fire({
          icon: 'success',
          title: 'Dados salvos com sucesso!',
          text: 'Os dados foram salvos com sucesso.',
        }).then(() => {
          navigate('/billingRequest');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao salvar',
          text: 'Ocorreu um erro ao salvar os dados.',
        }).then(() => {
          navigate('/tariffs');
        });
      }
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
      Swal.fire({
        icon: 'error',
        title: 'Erro ao salvar',
        text: 'Ocorreu um erro ao salvar os dados.',
      }).then(() => {
        navigate('/tariffs');
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/billingRequest');
  };

  const tenantData = useTenantData();

  return (
    <>
      {loading && <Loading />}
      <S.Container>
        <S.ContentWrapper>
          <S.Box>
            <S.Title>Importar Planilha</S.Title>
            <S.Separator />
            <S.BoxTitle>
              <p>Para importar a planilha para preenchimento automático, utilize o modelo disponível para download <a href="https://usc1.contabostorage.com/d6d39f0192924488b37d9be5d805e5e8:utilitarios/ExamploTarifas (1).xlsx">clicando aqui</a></p>
            </S.BoxTitle>
            <S.ContainerInput>
              <S.HiddenFileInput id="fileInput" type="file" onChange={handleFileChange} />
              <S.FileInputLabel primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} htmlFor="fileInput">
                <S.StyledUploadIcon /> {fileSelected ? 'Alterar arquivo' : 'Anexar arquivo'}
              </S.FileInputLabel>
            </S.ContainerInput>
          </S.Box>

          <div style={{display: 'flex', gap: '50px', justifyContent: 'flex-start', alignItems: 'start', width: '60%', marginBottom: '20px'}}>
            <CustomInput
              label='Data Referência'
              colorInputDefault={tenantData.primary_color_identity}
              colorInputSuccess={tenantData.secondary_color_identity}
              type='date'
              value={referenceDate}
              onChange={(e) => setReferenceDate(e.target.value)}
            />

            <CustomInput
              label='Data Cobrança'
              colorInputDefault={tenantData.primary_color_identity}
              colorInputSuccess={tenantData.secondary_color_identity}
              type='date'
              value={billingDate}
              onChange={(e) => setBillingDate(e.target.value)}
            />
          </div>

          {jsonData && jsonData.length > 0 && (
            <TableSpreadSheet dataSpreadSheet={jsonData} />
          )}

          <S.ContainerCardsMobile>
            <CardSpreadsheet data={jsonData}/>
          </S.ContainerCardsMobile>

          <S.ButtonArea>
            <S.BackButton primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} type='button' onClick={handleCancel}>Cancelar</S.BackButton>
            <S.NextButton  primary={tenantData.primary_color_identity} secundary={tenantData.secondary_color_identity} disabled={jsonData.length === 0} onClick={handleSave}>Salvar</S.NextButton>
          </S.ButtonArea>
        </S.ContentWrapper>
      </S.Container>
    </>
  );
}

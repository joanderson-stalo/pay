import { ChangeEvent, useState } from 'react';
import * as S from './styled';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';
import { TableSpreadSheet } from './Components/TableSpreadSheet/tableSpreadSheet';
import { CardSpreadsheet } from './Mobile/CardSpreadsheet/cardSpreadsheet';


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

export function ImportSpreadsheet() {
  const [jsonData, setJsonData] = useState<SpreadsheetData[]>([]);
  const [fileSelected, setFileSelected] = useState<boolean>(false);

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

    const sheetColumns: string[] = rawData[0] as string[];
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

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.Box>
          <S.Title>Importar Planilha de Tarifa</S.Title>
          <S.Separator />
          <S.BoxTitle>
            <p>Para importar a planilha para preenchimento automático, utilize o modelo disponível para download <a href="#">clicando aqui</a></p>
          </S.BoxTitle>
          <S.ContainerInput>
            <S.HiddenFileInput id="fileInput" type="file" onChange={handleFileChange} />
            <S.FileInputLabel htmlFor="fileInput">
              <S.StyledUploadIcon /> {fileSelected ? 'Alterar arquivo' : 'Anexar arquivo'}
            </S.FileInputLabel>
          </S.ContainerInput>
  
        </S.Box>
     
        {jsonData && jsonData.length > 0 && (
        <TableSpreadSheet dataSpreadSheet={jsonData} />
      )}

      <S.ContainerCardsMobile>
      <CardSpreadsheet data={jsonData}/>
      </S.ContainerCardsMobile>

         
        <S.ButtonArea>
          <S.BackButton>Cancelar</S.BackButton>
          <S.NextButton disabled={jsonData.length === 0}>Salvar</S.NextButton>
        </S.ButtonArea>
      </S.ContentWrapper>
      
    </S.Container>
  );
}

import { ThemeColor } from '@/config/color';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 492px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px 11px;
    background: ${ThemeColor.primaria};

    >button{
      border-radius: 3.532px;
      border: 0.353px solid #F5F4F4;
      background: #FFF;
      color: ${ThemeColor.primaria};
      font-size: 9.477px;
      padding: 5px 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 14.128px;
      letter-spacing: 0.353px;
    }

    > h2{
      color: var(--foundation-white-light, #FDFDFD);

      font-size: 12.906px;
      font-weight: 700;
      line-height: 15.566px;
    }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
    border-left: 1px solid #E0E0E0;
    border-right: 1px solid #E0E0E0;
    border-bottom: 1px solid #E0E0E0;
`;

const TableCell = styled.td`
    border-top: 1px solid #E0E0E0;
    border-bottom: 1px solid #E0E0E0;
    padding: 8px 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
    color: var(--light-secondary, #6C757D);

    font-size: 11px;
    line-height: 22px;
    text-align: center;
`;

const TableHeader = styled.th`
    padding: 8px 16px;
    color: var(--light-secondary, #6C757D);
   
    font-size: 11px;
    line-height: 22px;
    text-align: center;
`;

export function TopEstabelecimentos() {
    const data = [
      { ranking: '1º', nome: 'Padaria Trevo de Longo Nome', comissao: 340.00, qtdPos: '02' },
      { ranking: '1º', nome: 'Padaria Trevo de Longo Nome', comissao: 340.00, qtdPos: '02' },
      { ranking: '1º', nome: 'Padaria Trevo de Longo Nome', comissao: 340.00, qtdPos: '02' },
    ];

    function formatToBRL(value: number | bigint) {
      return new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
      }).format(value);
  }

  function handleButtonClick() {
    console.log("Botão 'Ver todos' clicado!");
}



    return (
        <Container>
            <Header>
                <h2>TOP Estabelecimentos</h2>
                <button onClick={handleButtonClick}>Ver todos</button>
            </Header>
            <Table>
                <thead>
                    <tr>
                        <TableHeader>Ranking</TableHeader>
                        <TableHeader>Nome</TableHeader>
                        <TableHeader>Comissão</TableHeader>
                        <TableHeader>Qtd. POS</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <TableCell>{item.ranking}</TableCell>
                            <TableCell>{item.nome}</TableCell>
                            <TableCell>{formatToBRL(item.comissao)}</TableCell>
                            <TableCell>{item.qtdPos}</TableCell>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

import * as S from './styled';

export function TopEstabelecimentos() {
    const data = [
      { ranking: '1º', nome: 'Padaria Trevo de Longo Nome', comissao: 340.00, qtdPos: '02' },
      { ranking: '2º', nome: 'Padaria Trevo de Longo Nome', comissao: 340.00, qtdPos: '02' },
      { ranking: '3º', nome: 'Padaria Trevo de Longo Nome', comissao: 340.00, qtdPos: '02' },
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
        <S.Container>
            <S.Header>
                <h2>TOP Estabelecimentos</h2>
                <button onClick={handleButtonClick}>Ver todos</button>
            </S.Header>
            <S.Table>
                <thead>
                    <tr>
                        <S.TableHeader>Ranking</S.TableHeader>
                        <S.TableHeader>Nome</S.TableHeader>
                        <S.TableHeader>Comissão</S.TableHeader>
                        <S.TableHeader>Qtd. POS</S.TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <S.TableCell>{item.ranking}</S.TableCell>
                            <S.TableCell>{item.nome}</S.TableCell>
                            <S.TableCell>{formatToBRL(item.comissao)}</S.TableCell>
                            <S.TableCell>{item.qtdPos}</S.TableCell>
                        </tr>
                    ))}
                </tbody>
            </S.Table>
        </S.Container>
    );
}

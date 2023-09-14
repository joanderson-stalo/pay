interface UserData {
  token: string;
}

export async function fetchTransactionDetails(selectedTransactionId: string, dataUser: UserData | null) {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${dataUser?.token}`
    };

    const response = await fetch(`https://api-pagueassim.stalopay.com.br/transactions/${selectedTransactionId}`, { headers });

    if (!response.ok) {
      throw new Error('Erro ao buscar os detalhes da transação');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro:', error);
    return null;
  }
}

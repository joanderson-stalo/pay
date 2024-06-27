const pixTransaction = {
  status: 201,
  success: true,
  message: "Success storing transaction",
  response: [{
    acquire_id: 1,
    customer_name: "Joanderson Silva",
    customer_document: "11275598420",
    status: "AGUARDANDO",
    confirmed: false,
    payment_type: "pix",
    description: "Descrição teste Lorem Ipsulum",
    amount: 1.5,
    net_amount: 0.9,
    discount: 0.6,
    seller_id: 1,
    captured_in: "2024-06-27 17:36:32",
    expired_in: 23007,
    updated_at: "2024-06-27T20:36:44.000000Z",
    created_at: "2024-06-27T20:36:32.000000Z",
    id: 16,
    id_acquire: "667dcd5ceb479330bed0c3e6",
    status_acquire: "waiting",
    payload_response: "{\"id\":\"667dcd5ceb479330bed0c3e6\",\"orderId\":\"5P2F0C7N0L9T\",\"customerSocialName\":\"Joanderson Silva\",\"amount\":1.5,\"amountPayed\":0,\"amountFormatted\":\"R$ 1,50\",\"installments\":1,\"typeOrder\":\"pix\",\"status\":\"waiting\",\"orderDescription\":\"Descri\\u00e7\\u00e3o teste Lorem Ipsulum\",\"dtCreated\":\"2024-06-27T17:36:44\",\"dtWaiting\":\"2024-06-27T20:36:45.0521728Z\",\"messageTransaction\":\"AGUARDANDO\",\"externalId\":\"16\",\"customerCPF\":\"11275598420\",\"transaction\":{\"transactionPix\":{\"txid\":\"ffadd23cf144d7bad36ac98f8177e6\",\"cobResponse\":{\"calendario\":{\"expiracao\":23007,\"criacao\":\"2024-06-27T17:36:44\"},\"valor\":{\"original\":\"1.50\"},\"status\":\"ATIVA\",\"urlPix\":\"https:\\/\\/qr.appless.dev\\/pix\\/ffadd23cf144d7bad36ac98f8177e6\",\"pixCopiaECola\":\"00020126870014br.gov.bcb.pix2565pix.creditag.com.br\\/qr\\/v3\\/at\\/dddb9227-b7eb-44e1-9d40-2e5fa32ac5375204000053039865802BR5925CONFRAPAG CONSULTORIA EMP6008CAMPINAS62070503***6304A86E\",\"pixCopiaEColaFormartted\":\"00020126870014br.gov.bcb.pix2565pix.creditag.com.br\\/qr\\/v3\\/at\\/dddb9227-b7eb-44e1-9d40-2e5fa32ac53752040000530398654041.505802BR5907AppLess6009Sao_Paulo62290525ffadd23cf144d7bad36ac98f8630496BC\",\"pix\":[]},\"created\":\"2024-06-27T17:36:45\"}}",
    seller: {
      id: 1,
      trading_name: "CONFRAPAG",
      company_name: "CONFRAPAG",
      email: "op@confrapag.com.br",
      document: "00000000000000",
      type_document: "CNPJ",
      type: "OP",
      phone: "123-456-7890",
      owner_name: "José",
      owner_birthday: "1990-01-01",
      owner_cpf: "98765432100",
      address_cep: "12345-678",
      address_street: "Example Street",
      address_number: "123",
      address_complement: "Apt 1",
      address_neighborhood: "Example Neighborhood",
      address_city: "Example City",
      address_state: "EX",
      created_at: "2024-06-26T18:29:08.000000Z",
      updated_at: "2024-06-26T18:29:08.000000Z",
      deleted_at: null
    },
    pix: {
      url: "https://qr.appless.dev/pix/ffadd23cf144d7bad36ac98f8177e6",
      code: "00020126870014br.gov.bcb.pix2565pix.creditag.com.br/qr/v3/at/dddb9227-b7eb-44e1-9d40-2e5fa32ac5375204000053039865802BR5925CONFRAPAG CONSULTORIA EMP6008CAMPINAS62070503***6304A86E",
      dateExpiration: "2024-06-28 00:00:11"
    }
  }]
};

export default pixTransaction;

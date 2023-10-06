import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  Titulo: Yup.string().required('Título é obrigatório'),
  Descricao: Yup.string().required('Breve Descrição é obrigatória'),
  TipoDePlano: Yup.object({
    value: Yup.string().required(),
    label: Yup.string()
  }).required('Tipo de Plano é obrigatório'),
  Antecipacao: Yup.object({
    value: Yup.string().required(),
    label: Yup.string()
  }).required('Informação sobre antecipação é obrigatória'),
  TaxaAntecipacao: Yup.string().required('Taxa de antecipação é obrigatória'),
});

import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  Titulo: Yup.string().required('Título é obrigatório'),
  Fornecedor: Yup.string().required('Fornecedor é obrigatório'),
  PlanoBase: Yup.string(), 
  TipoDePlano: Yup.object({
    value: Yup.string().required('Tipo de Plano é obrigatório'),
    label: Yup.string()
  }),
  Antecipacao: Yup.object({
    value: Yup.string().required('Antecipação é obrigatória'),
    label: Yup.string()
  }),
  TaxaAntecipacao: Yup.string().required('Taxa de antecipação é obrigatória')
});
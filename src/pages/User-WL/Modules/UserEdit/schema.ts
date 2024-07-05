import { validateTelefone } from '@/utils/telefoneValid';
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  Nome: Yup.string().required('Nome é obrigatório'),
  Telefone: Yup.string().required('Telefone é obrigatório')
    .test('valid-phone', 'Telefone inválido', value => validateTelefone(value || ''))
});

import { validateTelefone } from '@/utils/telefoneValid';
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  Nome: Yup.string().required('Nome é obrigatório'),
  Email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  Telefone: Yup.string().test('valid-phone', 'Telefone inválido', value => {
    return validateTelefone(value || '');
  }).required('Telefone é obrigatório'),
  Função: Yup.string().required('Função é obrigatória'),
});

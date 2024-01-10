import { validateTelefone } from '@/utils/telefoneValid';
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  Nome: Yup.string(),
  Telefone: Yup.string().test('valid-phone', 'Telefone inválido', value => {
    return validateTelefone(value || '');
  }),
});

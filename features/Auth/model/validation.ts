import * as yup from 'yup';

export const schema = yup.object({
  username: yup.string().trim().required('Введите логин'),
  password: yup.string().required('Введите пароль').min(4, 'Минимум 4 символа'),
});

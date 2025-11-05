import * as yup from 'yup';
import type { FormValues } from './types';

const regExpPhone = RegExp(/^\+?\d{7,15}$/);

export const addUserSchema: yup.ObjectSchema<FormValues> = yup.object({
  name: yup.string().trim().required('Имя обязательно').min(4, 'Минимум 4 символа'),

  phone: yup
    .string()
    .trim()
    .required('Телефон обязателен')
    .matches(regExpPhone, 'Неверный формат телефона')
    .min(11, 'В номере должно быть 11 символов')
    .max(11, 'В номере должно быть 11 символов'),
});

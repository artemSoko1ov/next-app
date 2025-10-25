import * as yup from 'yup';
import type {FormValues} from './types';

export const addUserSchema: yup.ObjectSchema<FormValues> = yup.object({
  name: yup
    .string()
    .trim()
    .required('Имя обязательно')
    .min(4, 'Минимум 4 символа'),

  phone: yup
    .string()
    .trim()
    .required('Телефон обязателен')
    .matches(/^\+?\d{7,15}$/, 'Неверный формат телефона')
    .min(12, 'В номере должно быть 12 символов')
});
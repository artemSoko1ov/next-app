'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { FormValues } from './types';
import { addUserSchema } from './validation';

export const useAddUserForm = () => {
  const methods = useForm<FormValues>({
    resolver: yupResolver(addUserSchema),
    defaultValues: { name: '', phone: '' },
    mode: 'onBlur',
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = handleSubmit((data: FormValues) => {
    console.log('Отправлено:', data);
    reset();
  });

  return { ...methods, onSubmit };
};

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { login, register as registerUser } from '@/shared/api/auth';
import { AuthFormValues } from '@/features/Auth/model/types';
import { schema } from '@/features/Auth/model/validation';

export const useAuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);

  const methods = useForm<AuthFormValues>({
    resolver: yupResolver(schema),
    defaultValues: { username: '', password: '' },
    mode: 'onBlur',
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (isRegister) {
        await registerUser(data.username, data.password);
        setIsRegister(false);
      } else {
        await login(data.username, data.password);
      }
      reset();
    } catch (err) {
      console.error('Ошибка при отправке формы:', err);
    }
  });

  return {
    ...methods,
    onSubmit,
    isRegister,
    setIsRegister,
  };
};

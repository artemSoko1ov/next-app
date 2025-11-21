'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { FormValues } from './types';
import { addUserSchema } from './validation';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { addUser, usersSlice } from '@/entities/User/model/usersSlice';

export const useAddUserForm = () => {
  const dispatch = useAppDispatch();

  const methods = useForm<FormValues>({
    resolver: yupResolver(addUserSchema),
    defaultValues: { name: '', phone: '' },
    mode: 'onBlur',
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = handleSubmit((data: FormValues) => {
    dispatch(
      addUser({
        id: Date.now(),
        name: data.name,
        phone: data.phone,
      }),
    );
    reset();
  });

  return { ...methods, onSubmit };
};

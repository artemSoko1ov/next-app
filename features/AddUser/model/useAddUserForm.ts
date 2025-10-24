'use client';

import { useEffect, useState } from 'react';
import React from 'react';
import { validateAddUser } from '@/features/AddUser/model/validation';

export const useAddUserForm = () => {
  const [values, setValues] = useState({ name: '', phone: '' });
  const [errors, setErrors] = useState({ nameError: '', phoneError: '' });
  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (errors.nameError === '' && errors.phoneError === '') {
      console.log('Форма отправлена:', values);
    }
  };

  useEffect(() => {
    setErrors(validateAddUser(values));
  }, [values]);

  return { values, errors, onChange, onSubmit };
};

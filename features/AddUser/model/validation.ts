import type { FormValues } from '@/features/AddUser/model/types';

export const validateAddUser = (values: FormValues) => {
  const errorMessages = {
    nameError: '',
    phoneError: '',
  };

  if (values.name === '') {
    errorMessages.nameError = 'Имя должно быть заполнено';
  }
  if (values.phone === '') {
    errorMessages.phoneError = 'Телефон должен быть заполнен';
  }

  return errorMessages;
};

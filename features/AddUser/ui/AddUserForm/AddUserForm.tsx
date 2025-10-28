'use client';

import './AddUserForm.scss';
import { useAddUserForm } from '@/features/AddUser/model';

function AddUserForm() {
  const { register, formState, onSubmit } = useAddUserForm();
  const { errors } = formState;

  return (
    <form className="form" onSubmit={onSubmit}>
      <label htmlFor="name" className="form__name-label">
        Введите имя
      </label>
      <input
        className="form__name-field field"
        type="text"
        id="name"
        placeholder="Введите имя"
        {...register('name')}
      />
      <span className="form__error-message message-1">{errors.name?.message}</span>
      <label htmlFor="phone" className="form__phone-label">
        Введите телефон
      </label>
      <input
        className="form__phone-field field"
        type="text"
        id="phone"
        placeholder="Введите номер"
        {...register('phone')}
      />
      <span className="form__error-message message-2">{errors.phone?.message}</span>
      <button className="form__submit" type="submit">
        Добавить пользователя
      </button>
    </form>
  );
}

export default AddUserForm;

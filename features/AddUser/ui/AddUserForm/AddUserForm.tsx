'use client';

import './AddUserForm.scss';
import { useAddUserForm } from '@/features/AddUser/model';

function AddUserForm() {
  const { values, errors, onSubmit, onChange } = useAddUserForm();
  return (
    <form className="form" onSubmit={onSubmit}>
      <label htmlFor="name" className="form__name-label">
        Введите имя
      </label>
      <input
        className="form__name-field field"
        type="text"
        id="name"
        name="name"
        value={values.name}
        onChange={onChange}
        required
      />
      <span className="form__error-message message-1">{errors.nameError}</span>
      <label htmlFor="phone" className="form__phone-label">
        Введите phone
      </label>
      <input
        className="form__phone-field field"
        type="text"
        id="phone"
        name="phone"
        value={values.phone}
        onChange={onChange}
        required
      />
      <span className="form__error-message message-2">{errors.phoneError}</span>
      <button className="form__submit" type="submit">
        Добавить пользователя
      </button>
    </form>
  );
}

export default AddUserForm;

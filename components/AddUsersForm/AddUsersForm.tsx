'use client';

import './AddUsersForm.scss';

export default function AddUsersForm() {
  return (
    <form className="form">
      <label htmlFor="name" className="form__name-label">
        Введите имя
      </label>
      <input className="form__name-field field" type="text" id="name" name="name" required />
      <span className="form__error-message message-1"></span>
      <label htmlFor="phone" className="form__phone-label">
        Введите phone
      </label>
      <input className="form__phone-field field" type="text" id="phone" name="phone" required />
      <span className="form__error-message message-2"></span>
      <button className="form__submit" type="submit">
        {' '}
        Добавить пользователя
      </button>
    </form>
  );
}

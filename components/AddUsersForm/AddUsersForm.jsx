'use client'
import './AddUsersForm.scss'
import {useState} from "react";

const AddUsersForm = (props) => {
  const {} = props
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(name, value);
    console.log('Функция 1 сработала');
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Отправка данных:', formData);
    console.log('Функция 2 сработала');
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name" className="form__name-label">Введите имя</label>
      <input
        className="form__name-field"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="email" className="form__email-label">Введите email</label>
      <input
        className="form__email-field"
        type="text"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="phone" className="form__phone-label">Введите phone</label>
      <input
        className="form__phone-field"
        type="text"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <button
        className="form__submit"
        type="submit"
      >
        Добавить пользователя
      </button>
    </form>
  )
}

export default AddUsersForm
'use client'

import './AddUsersForm.scss'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addUser} from '../../store/slices/usersSlice'
import type {AppDispatch} from '../../store'

export default function AddUsersForm() {
  const [formData, setFormData] = useState({name: '', phone: ''})
  const dispatch = useDispatch<AppDispatch>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newUser = {id: Date.now(), ...formData}
    dispatch(addUser(newUser))
    setFormData({name: '', phone: ''})
  }

  const validateForm = () => {
    const input = document.querySelector('.field')
    const errorMessages = document.querySelectorAll('.form__error-message')

    // if(input.focus && !formData.name && !formData.phone) {
    //   errorMessages.textContent = 'Поля не могут быть пустыми'
    // }
  }

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="name"
        className="form__name-label"
      >Введите имя
      </label>
      <input
        className="form__name-field field"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <span className="form__error-message message-1"></span>
      <label
        htmlFor="phone"
        className="form__phone-label"
      >Введите phone
      </label>
      <input
        className="form__phone-field field"
        type="text"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <span className="form__error-message message-2"></span>
      <button
        className="form__submit"
        type="submit"
      > Добавить пользователя
      </button>
    </form>
  )
}
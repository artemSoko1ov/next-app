'use client'
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

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Имя"
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Телефон"
      />
      <button type="submit">Добавить</button>
    </form>
  )
}
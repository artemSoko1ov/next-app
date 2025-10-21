'use client'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '@/store/slices/usersSlice'
import type { RootState, AppDispatch } from '@/store'
import AddUsersForm from '@/components/AddUsersForm'
import Link from "next/link";

export default function Users() {
  const dispatch = useDispatch<AppDispatch>()
  const { list, loading } = useSelector((state: RootState) => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (loading) return <p>Загрузка...</p>

  return (
    <section className="users">
      <AddUsersForm />
      {list.map(user => (
        <div key={user.id}>
          <Link href={`users/${user.id}`}>{user.name}</Link> — {user.phone}
        </div>
      ))}
    </section>
  )
}
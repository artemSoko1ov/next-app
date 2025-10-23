import './UserCard.scss'
import Link from "next/link";
import { User } from '@/entities/User/model/types'

export const UserCard = ({id, name, phone}: User) => {
  return (
    <div className="user-card">
      <Link href={`/user/${id}`}>
        <span>{id}. {name}</span>
        <span>{phone}</span>
      </Link>
    </div>
  )
}
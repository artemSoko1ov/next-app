import './User.scss'
import Link from "next/link";

const User = (props) => {
  const {
    id,
    name,
    email,
    phone
  } = props
  return (
    <div
      className="users__item"
      key={id}
    >
      <span>{id}. </span>
      <Link href={`users/${id}`}>
        {name}
      </Link>
      <p>{phone}</p>
      <br />
    </div>
  )
}

export default User
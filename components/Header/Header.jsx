import './Header.scss'
import Link from "next/link";

const Header = (props) => {
  const {} = props
  return (
    <header className="header">
      <Link href="/">
        Главная
      </Link>
      <Link href="/users">
        Пользователи
      </Link>
    </header>
  )
}

export default Header
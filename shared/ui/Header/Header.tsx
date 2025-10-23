import './Header.scss'
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        Главная
      </Link>
      <Link href="/users">
        Пользователи
      </Link>
      <Link href="/form">
        Форма
      </Link>
    </header>
  )
}

export default Header
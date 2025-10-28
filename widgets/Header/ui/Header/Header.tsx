import './Header.scss';
import Link from 'next/link';
import GlassSurface from '../../model/glassSurface'

const Header = () => {
  return (
    <header className="header">
      <GlassSurface
        displace={0.5}
        distortionScale={-180}
        redOffset={5}
        greenOffset={15}
        blueOffset={25}
        brightness={60}
        opacity={0.8}
        borderRadius={50}
        width={450}
      >
        <Link href="/">Главная</Link>
        <Link href="/users">Пользователи</Link>
        <Link href="/form">Форма</Link>
      </GlassSurface>
    </header>
  );
};

export default Header;

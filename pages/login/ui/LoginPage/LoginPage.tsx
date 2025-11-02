'use client';

import './LoginPage.scss';
import ColorBends from '@/pages/home/model/colorBends';
import GlassSurface from '@/widgets/Header/model/glassSurface';
import AuthForm from '@/features/Auth/ui/AuthForm';

const LoginPage = () => (
  <div className="login">
    <div className="login__background">
      <ColorBends
        colors={['#ff5c7a', '#8a5cff', '#00ffd1']}
        rotation={100}
        speed={0.3}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={0.8}
        parallax={0.6}
        noise={0.1}
        transparent
      />
    </div>

    <div className="login__content">
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
        height={480}
      >
        <AuthForm />
      </GlassSurface>
    </div>
  </div>
);

export default LoginPage;

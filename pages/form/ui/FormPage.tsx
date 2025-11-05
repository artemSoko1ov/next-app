import { AddUserForm } from '@/features/AddUser';
import GlassSurface from '@/widgets/Header/model/glassSurface';

const FormPage = () => (
  <div className="">
    <h1 className="">Форма</h1>
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
      <AddUserForm />
    </GlassSurface>
  </div>
);

export default FormPage;

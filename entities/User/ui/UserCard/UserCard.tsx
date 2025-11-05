import './UserCard.scss';
import Link from 'next/link';
import { User } from '@/entities/User/model/types';
import GlassSurface from '@/widgets/Header/model/glassSurface';

const UserCard = ({ id, name, phone }: User) => {
  return (
    <div className="user-card">
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
        <Link href={`/user/${id}`}>
          <span>
            {id}. {name}
          </span>
          <span>{phone}</span>
        </Link>
      </GlassSurface>
    </div>
  );
};

export default UserCard;

'use client';

import './UserList.scss';
import UserCard from '@/entities/User/ui/UserCard';
import { CircularProgress } from '@mui/material';
import { useUsersQuery } from '@/entities/User/model/useUsersQuery';
import { useAppSelector } from '@/shared/lib/hooks/ useAppSelector';

const UserList = () => {
  const { data: serverUsers = [], isLoading } = useUsersQuery();
  const localUsers = useAppSelector((state) => state.localUsers.list);

  const allUsers = [...serverUsers, ...localUsers];

  if (isLoading) return <CircularProgress />;

  return (
    <section className="user-list">
      {allUsers?.map((user) => (
        <UserCard id={user.id} name={user.name} phone={user.phone} key={user.id} />
      ))}
    </section>
  );
};

export default UserList;

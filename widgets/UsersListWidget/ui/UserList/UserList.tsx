'use client';

import './UserList.scss';
import { useUsers } from '@/widgets/UsersListWidget/model/useUsers';
import UserCard from '@/entities/User/ui/UserCard';
import { CircularProgress } from '@mui/material';

const UserList = () => {
  const { users, isLoading, isError, error, refetch } = useUsers();

  if (isLoading) return <CircularProgress />;
  if (isError) return <p>Ошибка: {error?.message}</p>;

  return (
    <section className="user-list">
      {users?.map((user) => (
        <UserCard id={user.id} name={user.name} phone={user.phone} key={user.id} />
      ))}
    </section>
  );
};

export default UserList;

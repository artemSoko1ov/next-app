'use client';

import './UserList.scss';
import { useUsers } from '@/widgets/UsersListWidget/model/useUsers';
import { UserCard } from '@/entities/User/ui/UserCard/UserCard';

const UserList = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="user-list">
      {users.map((user) => (
        <UserCard id={user.id} name={user.name} phone={user.phone} key={user.id} />
      ))}
    </section>
  );
};

export default UserList;

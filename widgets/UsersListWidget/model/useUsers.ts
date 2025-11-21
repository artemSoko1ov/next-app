import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '@/entities/User/model/api';
import type { User } from '@/entities/User';

export const useUsers = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5,
  });

  return { users, isLoading, isError, error, refetch };
};

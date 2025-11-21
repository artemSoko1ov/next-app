import { useQuery } from '@tanstack/react-query';
import { fetchUsers, User } from '@/entities/User';

export const useUsersQuery = () => {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5,
  });
};

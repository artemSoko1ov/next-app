import type { User } from '../model/types';
import { placeholderApi } from '@/shared/api/axiosInstance';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await placeholderApi.get<User[]>('/users');
  return response.data;
};

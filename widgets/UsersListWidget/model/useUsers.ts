'use client'

import { useEffect, useState } from 'react';
import { fetchUserList } from '@/entities/User/model/api';
import type { User } from '@/entities/User';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchUserList();
        setUsers(data);
      } catch (err) {
        setError('Ошибка при загрузке пользователей');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return { users, loading, error };
};

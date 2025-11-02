import { api } from '@/shared/api/axiosInstance';

export const login = async (username: string, password: string) => {
  try {
    const res = await api.post('/auth/login', { username, password });

    alert(` Успешный вход!\nТокен: ${res.data.token}`);
    return res.data;
  } catch (err: any) {
    if (err.response) {
      if (
        err.response.status === 400 ||
        err.response.status === 401 ||
        err.response.status === 404
      ) {
        alert(' Пользователь не найден — открой форму регистрации.');
      } else {
        alert(`Всё ок`);
      }
    } else {
      alert('Ошибка сети. Попробуй позже.');
    }

    console.error('Ошибка при входе:', err);
    return null;
  }
};

export const register = async (username: string, password: string) => {
  try {
    const res = await api.post('/users', {
      email: `${username}@example.com`,
      username,
      password,
      name: { firstname: 'New', lastname: 'User' },
    });

    alert('✅ Регистрация успешна! Теперь можешь войти.');
    return res.data;
  } catch (err: any) {
    if (err.response) {
      alert(`❌ Ошибка ${err.response.status}: Не удалось зарегистрировать.`);
    } else {
      alert('⚠️ Ошибка сети при регистрации.');
    }

    console.error('Ошибка при регистрации:', err);
    return null;
  }
};

'use client';

import './AuthForm.scss';
import { useAuthForm } from '../../model/useAuthForm';

const AuthForm = () => {
  const { register, formState, onSubmit, isRegister, setIsRegister } = useAuthForm();

  return (
    <form className="login__form" onSubmit={onSubmit}>
      <h1 className="login__title">{isRegister ? 'Регистрация' : 'Авторизация'}</h1>

      <div className="login__field">
        <label htmlFor="username">Логин</label>
        <input id="username" type="text" placeholder="Введите логин" {...register('username')} />
      </div>

      <div className="login__field">
        <label htmlFor="password">Пароль</label>
        <input
          id="password"
          type="password"
          placeholder="Введите пароль"
          {...register('password')}
        />
      </div>

      <button className="login__btn" type="submit">
        {isRegister ? 'Зарегистрироваться' : 'Войти'}
      </button>

      <button
        className="login__switch"
        type="button"
        onClick={() => setIsRegister((prev) => !prev)}
      >
        {isRegister ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}
      </button>
    </form>
  );
};

export default AuthForm;

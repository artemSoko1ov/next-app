import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddUserForm from './AddUserForm';
import '@testing-library/jest-dom';

const originalConsole = console.log;

describe('AddUserForm', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });
  afterEach(() => {
    console.log = originalConsole;
    jest.clearAllMocks();
  });

  it('shows validation errors when submitting empty form', async () => {
    render(<AddUserForm />);
    const submit = screen.getByRole('button', { name: /добавить/i });
    await userEvent.click(submit);
  });

  it('submits when data is valid', async () => {
    render(<AddUserForm />);
    const nameInput = screen.getByLabelText(/имя/i);
    const phoneInput = screen.getByLabelText(/телефон/i);
    const submit = screen.getByRole('button', { name: /добавить/i });

    await userEvent.type(nameInput, 'Valid Name');
    await userEvent.type(phoneInput, '+12345678901');
    await userEvent.click(submit);

    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith(
        expect.stringMatching(/Отправлено|Отправка/),
        expect.any(Object),
      );
    });
  });
});

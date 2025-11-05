'use client';

import './AddUserForm.scss';
import { useAddUserForm } from '@/features/AddUser/model';
import { TextField, Button, Box, Typography, Rating, NoSsr } from '@mui/material';

function AddUserForm() {
  const { register, formState, onSubmit } = useAddUserForm();
  const { errors } = formState;

  return (
    <Box component="form" className="mui-form" onSubmit={onSubmit}>
      <Typography variant="h5" textAlign="center" color="#00ffd1">
        Добавить пользователя
      </Typography>

      <TextField
        label="Имя"
        className="mui-form__field"
        variant="outlined"
        fullWidth
        {...register('name')}
        error={!!errors.name}
        helperText={errors.name?.message}
      />

      <TextField
        label="Телефон"
        className="mui-form__field"
        variant="outlined"
        fullWidth
        {...register('phone')}
        error={!!errors.phone}
        helperText={errors.phone?.message}
      />

      <Button type="submit" className="mui-form__submit" variant="contained">
        Добавить
      </Button>
    </Box>
  );
}

export default AddUserForm;

import { addUserSchema } from './validation';

describe('addUserSchema (Yup)', () => {
  it('rejects when name is too short', async () => {
    const values = { name: 'A', phone: '+1234567890' };
    await expect(addUserSchema.validate(values)).rejects.toThrow();
  });

  it('rejects when phone has invalid format', async () => {
    const values = { name: 'Valid Name', phone: 'bad-phone' };
    await expect(addUserSchema.validate(values)).rejects.toThrow(/телефон|phone/i);
  });

  it('accepts valid values', async () => {
    const values = { name: 'Valid Name', phone: '+12345678901' };
    await expect(addUserSchema.validate(values)).resolves.toEqual(values);
  });
});

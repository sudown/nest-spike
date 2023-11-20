import { compare } from 'bcrypt';

export const comparePassword = async (
  password: string,
  passwordHash: string,
): Promise<boolean> => {
  return compare(password, passwordHash);
};

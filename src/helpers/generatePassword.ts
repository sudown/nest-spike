import { hash } from 'bcrypt';

export const generateHash = async (password: string): Promise<string> => {
  return hash(password, 10);
};

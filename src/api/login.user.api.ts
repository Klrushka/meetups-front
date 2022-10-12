import { ILoginCredentials } from '../interfaces/login.credentials.interface';

export const loginUser = async (credentials: ILoginCredentials) => {
  const url = 'http://localhost:3000/auth/login';
  const token = await window.fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  return token;
};

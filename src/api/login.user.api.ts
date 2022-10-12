import { ILoginCredentials } from '../interfaces/login.credentials.interface';

export const loginUser = async (credentials: ILoginCredentials) => {
  const url = process.env.REACT_APP_USER_LOGIN;
  const token = await window.fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  return token;
};

import { IRegistrationCredentials } from '../interfaces/registration.credentials.interface';

export const registrateUser = async (credentials: IRegistrationCredentials) => {
  const url = 'http://localhost:3000/auth/registration';
  const token = await window.fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  return token;
};
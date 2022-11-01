import { IRegistrationCredentials } from '@interfaces';

export const registrateUser = async (credentials: IRegistrationCredentials) => {
  const url = process.env.REACT_APP_USER_REGISTRATION;
  const token = await window.fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  return token;
};

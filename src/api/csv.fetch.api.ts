import { getToken } from '@helpers';

export const getCsvData = async () => {
  const token = `Bearer ${getToken()}`;
  const data = await window.fetch(process.env.REACT_APP_MEETUPS_CSV, {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  });

  return data;
};

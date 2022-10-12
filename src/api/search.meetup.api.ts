import { getToken } from 'src/helpers/token';

export const search = async (title: string) => {
  const url = `http://localhost:3001/meetups${title ? `?search=${title}` : ''}`;
  const searchResult = await window.fetch(url, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return searchResult;
};
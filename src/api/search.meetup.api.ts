import { getToken } from '@helpers';

export const search = async (title: string) => {
  const url = `${process.env.REACT_APP_MEETUPS}${title ? `?search=${title}` : ''}`;
  const searchResult = await window.fetch(url, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return searchResult;
};
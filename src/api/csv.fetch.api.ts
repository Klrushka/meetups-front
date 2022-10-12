import { getToken } from '@helpers';

export const getCsvData = async () => {
  const data = await window.fetch(
    process.env.REACT_APP_MEETUPS_CSV, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }, 
  )

  return data;
}


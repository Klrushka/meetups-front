import { getToken } from '@helpers';

export const getCsvData = async () => {
  const data = await window.fetch(
    `http://localhost:3001/meetupscsv`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }, 
  )

  return data;
}


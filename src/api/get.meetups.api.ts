import { getToken } from '@helpers';

export const fetchData = async (setMeetups: Function) => {
  const result = await window.fetch(process.env.REACT_APP_MEETUPS, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  const jsonResult = await result.json();

  setMeetups(jsonResult);
};
import { getToken } from '@helpers';
import { IMeetup } from '@interfaces';

export const fetchData = async (
  setMeetups: React.Dispatch<React.SetStateAction<IMeetup[]>>
) => {
  const result = await window.fetch(process.env.REACT_APP_MEETUPS, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  const jsonResult = await result.json();

  setMeetups(jsonResult);
};

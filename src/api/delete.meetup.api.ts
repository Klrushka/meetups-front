import { getToken } from '@helpers';

export const deleteMeetup = async (id: string) => {
  const url = `${process.env.REACT_APP_MEETUPS}/${id}`;
  const token = `Bearer ${getToken()}`;
  const deletedMeetup = await window.fetch(url, {
    method: 'DELETE',
    headers: {
      Authorization: token,
    },
  });
  return deletedMeetup;
};

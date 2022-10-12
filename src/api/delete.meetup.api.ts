import { getToken } from '../helpers/token';

export const deleteMeetup = async (id: string) => {
  const url = `http://localhost:3001/meetups/${id}`;
  const token = `Bearer ${getToken()}`;
  const deletedMeetup = await window.fetch(
    url, {
    method: 'DELETE',
    headers: {
      Authorization: token,
    },
  }
  )
  return deletedMeetup;
}
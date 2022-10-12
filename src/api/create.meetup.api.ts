import { getToken } from '../helpers/token';
import { ICreateMeetup } from '../interfaces/create.meetup.interface';

export const createMeetup = async (meetup: ICreateMeetup) => {
  const token = `Bearer ${getToken()}`
  const createdMeetup = await window.fetch('http://localhost:3001/meetups', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(meetup),
  });

  return createdMeetup;
};
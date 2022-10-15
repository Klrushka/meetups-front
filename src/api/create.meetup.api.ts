import { getToken } from '@helpers';
import { ICreateMeetup } from '@interfaces';

export const createMeetup = async (meetup: ICreateMeetup) => {
  const token = `Bearer ${getToken()}`;
  const createdMeetup = await window.fetch(process.env.REACT_APP_MEETUPS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(meetup),
  });

  return createdMeetup;
};

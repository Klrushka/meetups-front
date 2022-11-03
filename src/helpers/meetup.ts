import { IMeetup } from '@interfaces';

export const getMeetupByIdFromMeetupList = (meetups: IMeetup[], id: string): IMeetup => {
  return meetups.find(meetup => meetup._id === id) ?? null;
}
import crypto from 'crypto'
import { ICreateMeetup } from '@interfaces';


export const createMeetup = async (meetup: ICreateMeetup) => {
  const _id = crypto.randomBytes(24).toString();
  const userId = crypto.randomBytes(24).toString();
  const createdAt = new Date().toString();
  const updatedAt = new Date().toString();
  const dueTime = meetup.dueTime.toString();
  const createdMeetup = {...meetup, _id, userId, createdAt, updatedAt, dueTime};
  return {
    status: 200,
    json: async () => {
      return createdMeetup
    }
  }
}
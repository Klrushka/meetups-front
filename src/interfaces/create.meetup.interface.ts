import { ILocation } from './location.interface';

export interface ICreateMeetup {
  title: string;
  description?: string;
  tags: string[];
  dueTime: Date;
  location: ILocation;
}

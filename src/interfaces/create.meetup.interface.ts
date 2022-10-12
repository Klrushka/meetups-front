import { ILocation } from './location.interface';

export class ICreateMeetup {
  title: string;
  description?: string;
  tags: string[];
  dueTime: Date;
  location: ILocation
}
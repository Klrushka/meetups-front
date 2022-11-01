import { ILocation } from './location.interface';

export interface IMeetup {
  title: string;
  description?: string;
  tags: string[];
  userId: string;
  dueTime: string;
  location: ILocation;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

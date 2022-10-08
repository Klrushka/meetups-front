export interface IMeetup {
  title: string;
  description?: string;
  tags: string[];
  userId: string;
  dueTime: string;
  location: {
    type: string;
    coordinates: number[];
  }
  _id: string;
  createdAt: string;
  updatedAt: string;
}
export class CreateMeetupDto {
  title: string;
  description?: string;
  tags: string[];
  dueTime: Date;
  location: {
    type: string;
    coordinates: number[];
  }
}
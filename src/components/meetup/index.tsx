import React from 'react';
import { formatDate } from '@helpers/date';
import { IMeetup } from '@interfaces/meetup.interface';
import {
  Button,
  DateMap,
  HeadWrapper,
  Link,
  ListItem,
  Location,
  MeetupWrapper,
  Tags,
  Title,
} from './style';
import pin from '../../assets/images/pin.png'

export const Meetup: React.FunctionComponent<{
  meetup: IMeetup;
  deleteMeetup: React.MouseEventHandler;
  onClick: React.MouseEventHandler;
}> = ({ meetup, deleteMeetup, onClick }) => {
  const { dueTime, location, tags, title, description } = meetup;
  const locationUrl = `${
    process.env.REACT_APP_MAP_LINK
  }/${location.coordinates.join(',')}`;
  return (
    <MeetupWrapper onClick={onClick}>
      <HeadWrapper>
        <Title>{title}</Title>
        <DateMap>
          <Location>
            <img width="20" height="20px" src={pin} alt="pin" />
            <Link href={locationUrl}>Map</Link>
          </Location>
          <p className="dueTime">{formatDate(dueTime)}</p>
        </DateMap>
      </HeadWrapper>
      <p className="description">{description}</p>

      <Tags>
        {tags.map(tag => {
          return (
            <ListItem key={Math.random().toString(36).substring(2)}>
              {tag}
            </ListItem>
          );
        })}
      </Tags>
      <Button onClick={deleteMeetup}>Delete</Button>
    </MeetupWrapper>
  );
};

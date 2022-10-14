import React from 'react';
import { formatDate } from '@helpers/date';
import { IMeetup } from '@interfaces/meetup.interface';
import { DateMap, HeadWrapper, MeetupWrapper, Tags, Title, Location, Link, ListItem, Button } from '@styled/meetup';

export const Meetup: React.FunctionComponent<{ meetup: IMeetup; deleteMeetup: React.MouseEventHandler }> = ({
  meetup,
  deleteMeetup,
}) => {
  const locationUrl = `http://www.google.com/maps/place/${meetup.location.coordinates.join(',')}`;
  return (
    <MeetupWrapper>
      <HeadWrapper>
        <Title className='title'>{meetup.title}</Title>
        <DateMap>
          <Location>
            <img width='20' height='' src='pin.png' alt='pin' />
            <Link href={locationUrl}>Map</Link>
          </Location>

          <p className='dueTime'>{formatDate(meetup.dueTime)}</p>
        </DateMap>
      </HeadWrapper>
      <p className='description'>{meetup.description}</p>

      <Tags>
        {meetup.tags.map((tag) => {
          return <ListItem>{tag}</ListItem>;
        })}
      </Tags>
      <Button onClick={deleteMeetup}>Delete</Button>
    </MeetupWrapper>
  );
};

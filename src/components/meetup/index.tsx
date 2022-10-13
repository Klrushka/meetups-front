import React from 'react';
import { formatDate } from '@helpers/date';
import { IMeetup } from '@interfaces/meetup.interface';
import { MeetupWrapper } from '@styled/meetup';

export const Meetup: React.FunctionComponent<{ meetup: IMeetup; deleteMeetup: React.MouseEventHandler }> = ({
  meetup,
  deleteMeetup,
}) => {
  const locationUrl = `http://www.google.com/maps/place/${meetup.location.coordinates.join(',')}`;
  return (
    <MeetupWrapper>
      <div>
        <p>
          <img width='20' height='' src='pin.png' alt='pin' />
          <a href={locationUrl}>Map</a>
        </p>
        <p className='dueTime'>{formatDate(meetup.dueTime)}</p>
      </div>
      <p className='title'>{meetup.title}</p>
      <p className='description'>{meetup.description}</p>

      <ul className='tags'>
        {meetup.tags.map((tag) => {
          return <li>{tag}</li>;
        })}
      </ul>
      <button onClick={deleteMeetup}>Delete</button>
    </MeetupWrapper>
  );
};

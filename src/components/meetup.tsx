import React from 'react';
import { IMeetup } from '../interfaces/meetup';
import '../styles/meetup.css';

const formatDate = (date: string) => new Date(date).toLocaleString();

export const Meetup: React.FunctionComponent<{ meetup: IMeetup; deleteMeetup: React.MouseEventHandler }> = (props) => {
  return (
    <div className='meetup'>
      <div className='location'>
        <p>
          <img width='20' height='' src='pin.png' alt='pin' />
          <a href={`http://www.google.com/maps/place/${props.meetup.location.coordinates.join(',')}`}>Map</a>
        </p>
        <p className='dueTime'>{formatDate(props.meetup.dueTime)}</p>
      </div>
      <p className='title'>{props.meetup.title}</p>
      <p className='description'>{props.meetup.description}</p>

      <ul className='tags'>
        {props.meetup.tags.map((tag) => {
          return <li>{tag}</li>;
        })}
      </ul>
      <button onClick={props.deleteMeetup}>Delete</button>
    </div>
  );
};

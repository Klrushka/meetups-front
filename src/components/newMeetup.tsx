import '../styles/newMeetup.css';
import { useState } from 'react';
import { CreateMeetupDto } from '../dto/createMeetupDto';
import { getToken } from '../services/token';
import { IMeetup } from '../interfaces/meetup';

const createMeetup = async (meetup: CreateMeetupDto) => {
  const createdMeetup = await window.fetch('http://localhost:3001/meetups', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(meetup),
  });

  return createdMeetup;
};

export const NewMeetupWindow: React.FC<{ meetups: IMeetup[]; setMeetups: Function; setWindowShow: Function }> = ({
  setWindowShow,
  meetups,
  setMeetups,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState(['']);
  const [dueTime, setDueTime] = useState(new Date());
  const [showCreatedMessage, setShowCreatedMessage] = useState(false);
  const [location, setLocation] = useState({
    type: 'Point',
    coordinates: [12, 12],
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const createdMeetup = await createMeetup({
      title,
      description,
      tags,
      dueTime,
      location,
    });
    setShowCreatedMessage(true);
    meetups.push(await createdMeetup.json());
    setMeetups(meetups);
  };

  return (
    <div className='newMeetupWrapper'>
      <p>New Meetup</p>
      <div className='newMeetup'>
        <div
          className='cross'
          onClick={(event) => {
            setWindowShow(false);
          }}
        >
          <img src='cross.png' alt='cross' width='45px' height='45px' />
        </div>
        <form className='form' onSubmit={handleSubmit}>
          <label>
            <p>Title</p>
            <input
              type='text'
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </label>
          <label>
            <p>Description</p>
            <input
              type='text'
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </label>
          <label>
            <p>Tags</p>
            <input
              type='text'
              onChange={(event) => {
                setTags(event.target.value.split(' '));
              }}
            />
          </label>
          <label>
            <p>Due time</p>
            <input
              type='datetime-local'
              onChange={(event) => {
                setDueTime(new Date(event.target.value));
              }}
            />
          </label>
          <label>
            <p>Location</p>
            <input
              type='text'
              onChange={(event) => {
                setLocation({ type: 'Point', coordinates: event.target.value.split(' ').map((item) => +item) });
              }}
            />
          </label>
          <label>
            <p></p>
            <button type='submit'> Create!</button>
            {showCreatedMessage && <p>Meetup Created!</p>}
          </label>
        </form>
        <hr />
        <hr />
      </div>
    </div>
  );
};

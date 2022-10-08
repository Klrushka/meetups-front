import '../styles/newMeetup.css';
import { useState } from 'react';



const handleSubmit = () => {

}


export const NewMeetupWindow: React.FC<{ setWindowShow: Function }> = ({ setWindowShow }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState(['']);
  const [dueTime, setDueTime] = useState(new Date());
  const [location, setLocation] = useState({});

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
            <p>title</p>
            <input
              type='text'
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </label>
          <label>
            <p>description</p>
            <input
              type='text'
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </label>
          <label>
            <p>tags</p>
            <input
              type='text'
              onChange={(event) => {
                setTags(event.target.value.split(' '));
              }}
            />
          </label>
          <label>
            <p>duetime</p>
            <input
              type='datetime-local'
              onChange={(event) => {
                setDueTime(new Date(event.target.value));
              }}
            />
          </label>
          <label>
            <p>location</p>
            <input
              type='text'
              onChange={(event) => {
                setLocation({ type: 'Point', coordinates: event.target.value.split(' ') });
              }}
            />
          </label>
          <label>
            <p></p>
            <button type='submit'> Create!</button>
          </label>
        </form>
      </div>
    </div>
  );
};

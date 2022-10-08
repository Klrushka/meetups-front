import { useState } from 'react';
import '../styles/controlPanel.css';
import { NewMeetupWindow } from './newMeetup';

export const ControlPanel = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className='controlPanel'>
        <input />
        <button>search</button>
        <button
          onClick={(event) => {
            setShowModal(!showModal);
          }}
        >
          create new meetup
        </button>
      </div>
      {showModal && <NewMeetupWindow setWindowShow={setShowModal} />}
    </div>
  );
};

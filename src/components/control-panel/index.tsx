import React from 'react';
import { IMeetup } from '@interfaces/meetup.interface';
import './index.css';
import { searchHandler } from '@mock/backend';
// import { searchHandler } from '@helpers/search.handler';


export const ControlPanel: React.FC<{ setShowModal: Function; meetups: IMeetup[]; setMeetups: Function }> = ({
  setShowModal,
  meetups,
  setMeetups,
}) => {
  return (
    <div>
      <div className='controlPanel'>
        <input
          onChange={searchHandler(setMeetups)}
        />
        <button
          onClick={(event) => {
            setShowModal(true);
          }}
        >
          create new meetup
        </button>
      </div>
    </div>
  );
};

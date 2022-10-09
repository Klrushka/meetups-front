import React from 'react';
import { IMeetup } from '../interfaces/meetup';
import { getToken } from '../services/token';
import '../styles/controlPanel.css';

const search = async (title: string) => {
  const url = `http://localhost:3001/meetups${title ? `?search=${title}` : ''}`;
  const searchResult = await window.fetch(url, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return searchResult;
};

export const ControlPanel: React.FC<{ setShowModal: Function; meetups: IMeetup[]; setMeetups: Function }> = ({
  setShowModal,
  meetups,
  setMeetups,
}) => {
  return (
    <div>
      <div className='controlPanel'>
        <input
          onChange={async (event) => {
            const result = await search(event.target.value);
            const esMeetups = await result.json();
            if (esMeetups.body) {
              const findedMeetups = esMeetups.body.hits.hits.map((item) => item._source._doc);
              setMeetups(findedMeetups);
            } else {
              setMeetups(esMeetups);
            }
          }}
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

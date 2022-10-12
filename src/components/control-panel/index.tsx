import React from 'react';
import { search } from '@api/search.meetup.api';
import { IMeetup } from '@interfaces/meetup.interface';
import './index.css';


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
            const result = await search(event.target.value).then(result => result.json());
            if (result.body) {
              const findedMeetups = result.body.hits.hits.map((item) => item._source._doc);
              setMeetups(findedMeetups);
            } else {
              setMeetups(result);
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

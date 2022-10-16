import React from 'react';
import { useState } from 'react';
import { IMeetup } from '@interfaces';
import { createMeetup } from '@mock/backend';
import {
  CreateButton,
  CreateInput,
  CreateTitle,
  Form,
  Label,
  NewMeetupWrapper,
} from './style';

// import { createMeetup } from '@api/create.meetup.api';

export const NewMeetupWindow: React.FC<{
  meetups: IMeetup[];
  setMeetups: React.Dispatch<React.SetStateAction<IMeetup[]>>;
  setWindowShow: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setWindowShow, meetups, setMeetups }) => {
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
    setWindowShow(false);
  };

  return (
    <NewMeetupWrapper>
      <Form className="form" onSubmit={handleSubmit}>
      <CreateTitle>New Meetup</CreateTitle>
        <Label>
          <p>Title</p>
          <CreateInput
            type="text"
            onChange={event => {
              setTitle(event.target.value);
            }}
          />
        </Label>
        <Label>
          <p>Description</p>
          <CreateInput
            type="text"
            onChange={event => {
              setDescription(event.target.value);
            }}
          />
        </Label>
        <Label>
          <p>Tags</p>
          <CreateInput
            type="text"
            onChange={event => {
              setTags(event.target.value.split(' '));
            }}
          />
        </Label>
        <Label>
          <p>Location</p>
          <CreateInput
            type="text"
            onChange={event => {
              setLocation({
                type: 'Point',
                coordinates: event.target.value.split(' ').map(item => +item),
              });
            }}
          />
        </Label>
        <Label>
          <p>Due time</p>
          <CreateInput
            type="datetime-local"
            onChange={event => {
              setDueTime(new Date(event.target.value));
            }}
          />
        </Label>

        <Label>
          <CreateButton type="submit"> Create!</CreateButton>
          {showCreatedMessage && <p>Meetup Created!</p>}
        </Label>
      </Form>
    </NewMeetupWrapper>
  );
};

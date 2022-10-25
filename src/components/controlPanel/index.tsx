import React from 'react';
import { showModalHandler } from '@helpers';
import { searchHandler } from '@helpers';
import { IMeetup } from '@interfaces/meetup.interface';
// import { searchHandler } from '@mock/backend';
import {
  Button,
  ButtonBlock,
  ControlPanelWrapper,
  Input,
  InputWrapper,
  Span,
} from './style';

export const ControlPanel: React.FC<{
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  meetups: IMeetup[];
  setMeetups: React.Dispatch<React.SetStateAction<IMeetup[]>>;
}> = ({ setShowModal, setMeetups }) => {
  return (
    <ControlPanelWrapper>
      <div>
        <ButtonBlock>
          <Span> Your Meetups</Span>
          <Button onClick={showModalHandler(setShowModal)}>New</Button>
        </ButtonBlock>
        <InputWrapper>
          <Input onChange={searchHandler(setMeetups)} />
        </InputWrapper>
      </div>
    </ControlPanelWrapper>
  );
};

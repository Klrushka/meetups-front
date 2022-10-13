import React from 'react';
import { IMeetup } from '@interfaces/meetup.interface';
import { searchHandler } from '@mock/backend';
import { Button, ButtonBlock, ControlPanelWrapper, Input, InputWrapper, Span } from '@styled';
// import { searchHandler } from '@helpers/search.handler';

export const ControlPanel: React.FC<{ setShowModal: Function; meetups: IMeetup[]; setMeetups: Function }> = ({
  setShowModal,
  meetups,
  setMeetups,
}) => {
  return (
    <ControlPanelWrapper>
      <div>
        <ButtonBlock>
          <Span> Your Meetups</Span>
          <Button
            onClick={(event) => {
              setShowModal(true);
            }}
          >
            New
          </Button>
        </ButtonBlock>
        <InputWrapper>
          <Input onChange={searchHandler(setMeetups)} />
        </InputWrapper>
      </div>
    </ControlPanelWrapper>
  );
};

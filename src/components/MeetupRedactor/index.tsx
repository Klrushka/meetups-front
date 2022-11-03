import { Formik } from 'formik';
import { title } from 'process';
import React from 'react';
import { IMeetup } from '@interfaces';
import {
  Button,
  Error,
  Form,
  Input,
  InputSection,
  Label,
  MeetupRedactorWrapper,
  Title,
} from './style';
import { mockMeetup } from '@components/Meetup/__test__/__mock__/data';

export const MeetupRedactor: React.FC<{
  meetup: IMeetup;
  setMeetups: React.Dispatch<React.SetStateAction<IMeetup[]>>;
  setWindowShow: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ meetup, setMeetups, setWindowShow }) => {
  const { title, description, tags, dueTime, location } = meetup ?? mockMeetup;
  return (
    <MeetupRedactorWrapper>
      <Title>Your Meetup</Title>
      <Formik
        initialValues={{
          title,
          description,
          tags,
          dueTime,
          location,
        }}
        validateOnBlur
        onSubmit={() => {
          console.log('submited');
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <Form>
            <InputSection>
              <Label htmlFor={'title'}>Title</Label>
              <br />
              <Input
                type={`text`}
                name={`title`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={title}
              />
            </InputSection>
            {touched.title && errors.title && <Error>{errors.title}</Error>}

            <InputSection>
              <Label htmlFor={'description'}>Description</Label>
              <br />
              <Input
                type={`text`}
                name={`description`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={description}
              />
            </InputSection>
            {touched.description && errors.description && (
              <Error>{errors.description}</Error>
            )}

            <InputSection>
              <Label htmlFor={'tags'}>Tags</Label>
              <br />
              <Input
                type={`text`}
                name={`tags`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={tags.join(' ')}
              />
            </InputSection>
            {touched.tags && errors.tags && <Error>{errors.tags}</Error>}

            <InputSection>
              <Label htmlFor={'location'}>Location</Label>
              <br />
              <Input
                type={`text`}
                name={`location`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={String(location.coordinates.join(' '))}
              />
            </InputSection>
            {touched.dueTime && errors.dueTime && (
              <Error>{errors.dueTime}</Error>
            )}

            <InputSection>
              <Label htmlFor={'dueTime'}>Due Time</Label>
              <br />
              <Input
                type={`datetime-local`}
                name={`dueTime`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={new Date(dueTime).toISOString().slice(0, 19)}
              />
            </InputSection>
            {touched.dueTime && errors.dueTime && (
              <Error>{errors.dueTime}</Error>
            )}
            <InputSection>
              <Button
                disabled={!isValid || !dirty}
                onClick={
                  handleSubmit as unknown as React.MouseEventHandler<HTMLButtonElement>
                }
                type={`submit`}
              >
                Update
              </Button>
            </InputSection>
          </Form>
        )}
      </Formik>
    </MeetupRedactorWrapper>
  );
};

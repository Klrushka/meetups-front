import React from 'react';
import { Navbar } from '@components/Navbar';
import { Pdf } from '@components/PdfViewer';
import { MeetupPageWrapper } from '../meetup/style';

export const PdfPage = () => {
  return (
    <MeetupPageWrapper>
      <Navbar />
      <Pdf />
    </MeetupPageWrapper>
  );
};

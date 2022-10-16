import React from 'react';
import { Navbar } from '@components/navbar';
import { Pdf } from '@components/pdfViewer';
import { MeetupPageWrapper } from '../meetup/style';

export const PdfPage = () => {
  return (
    <MeetupPageWrapper>
      <Navbar />
      <Pdf />
    </MeetupPageWrapper>
  );
};

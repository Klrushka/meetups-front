import React from 'react';
import { CsvPage } from '../pages/csv';
import { LoginPage } from '../pages/login';
import { MeetupPage } from '../pages/meetup';
import { PdfPage } from '../pages/pdf';
import { RegistratePage } from '../pages/registration';

export const routes = [
  { path: '/login', element: <LoginPage />},
  { path: '/meetups', element: <MeetupPage /> },
  { path: '/registration', element: <RegistratePage /> },
  { path: '/pdf', element: <PdfPage /> },
  { path: '/csv', element: <CsvPage /> },
];

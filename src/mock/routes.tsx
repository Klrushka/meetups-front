import React from 'react';
import { setToken } from '../helpers/token';
import { CsvPage } from '../pages/csv-page';
import { LoginPage } from '../pages/login-page';
import { MeetupPage } from '../pages/meetup-page';
import { PdfPage } from '../pages/pdf-page';
import { RegistratePage } from '../pages/registration-page';

export const routes = [
  { path: '/login', element: <LoginPage setToken={setToken} /> },
  { path: '/meetups', element: <MeetupPage /> },
  { path: '/registration', element: <RegistratePage /> },
  { path: '/pdf', element: <PdfPage /> },
  { path: '/csv', element: <CsvPage /> },
];

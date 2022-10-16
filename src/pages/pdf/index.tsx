import React from 'react';
import { Navbar } from '@components/navbar';
import { Pdf } from '@components/pdf-viewer';

export const PdfPage = () => {
  return (
    <div>
      <Navbar />
      <Pdf />
    </div>
  );
};

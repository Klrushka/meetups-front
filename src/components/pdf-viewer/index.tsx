import React from 'react';
import { useEffect, useState } from 'react';
import { fetchPdf } from '@mock/backend';
import { Link, PdfWrapper } from './style';

// import { fetchPdf } from '@api/pdf.fetch.api';

export const Pdf = () => {
  const [pdfLink, setPdfLink] = useState<string>();

  useEffect(() => {
    fetchPdf(setPdfLink);
  }, []);

  return (
    <PdfWrapper>
      <Link href={pdfLink}>Your PDF</Link>
    </PdfWrapper>
  );
};

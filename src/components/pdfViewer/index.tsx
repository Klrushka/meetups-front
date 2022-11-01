import React from 'react';
import { useEffect, useState } from 'react';
// import { fetchPdf } from '../../mock/backend/pdf.fetch.mock';
import { Link, LinkWrapper, PdfWrapper } from './style';

import { fetchPdf } from '@api/pdf.fetch.api';

export const Pdf = () => {
  const [pdfLink, setPdfLink] = useState<string>();

  useEffect(() => {
    fetchPdf(setPdfLink);
  }, []);

  return (
    <PdfWrapper>
      <LinkWrapper>
        <Link id='pdfLink' href={pdfLink}>Your PDF</Link>
      </LinkWrapper>
    </PdfWrapper>
  );
};

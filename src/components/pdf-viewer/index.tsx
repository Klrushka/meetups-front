import { useEffect, useState } from 'react';
import { fetchPdf } from '../../api/pdf.fetch';
import './index.css'

export const Pdf = () => {
  const [pdfLink, setPdfLink] = useState<string>();

  useEffect(() => {
    fetchPdf(setPdfLink);
  }, []);

  return (
    <div className='pdfLink'>
      <a href={pdfLink}>Your PDF</a>
    </div>
  );
};

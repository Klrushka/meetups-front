import { useEffect, useState } from 'react';
import { getToken } from '../services/token';
import '../styles/pdf.css'

export const Pdf = () => {
  const [pdfLink, setPdfLink] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await window
        .fetch('http://localhost:3001/meetupspdf', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        })
        .then((res) => {
          res.blob().then(blob => {
            const fileUrl = window.URL.createObjectURL(blob);
            setPdfLink(fileUrl)
          })
        });
    };
    fetchData();
  }, []);

  return (
    <div className='pdfLink'>
      <a href={pdfLink}>Your PDF</a>
    </div>
  );
};

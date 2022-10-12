import { getToken } from '../helpers/token';

export const fetchPdf = async (setPdfLink: Function) => {
  const token = `Bearer ${getToken()}`;
  const url = 'http://localhost:3001/meetupspdf';
  await window
    .fetch(url, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      res.blob().then(blob => {
        const fileUrl = window.URL.createObjectURL(blob);
        setPdfLink(fileUrl)
      })
    });
};
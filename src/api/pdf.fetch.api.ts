import { getToken } from '@helpers';

export const fetchPdf = async (setPdfLink: Function) => {
  const token = `Bearer ${getToken()}`;
  const url = process.env.REACT_APP_MEETUPS_PDF;
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
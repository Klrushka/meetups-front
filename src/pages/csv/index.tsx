import React from 'react';
import { useEffect, useState } from 'react';
// import { getCsvData } from '@api'
import { Csv, Navbar } from '@components';
import { getCsvData } from '@mock/backend';
import { MeetupPageWrapper } from '../meetup/style';

export const CsvPage = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const csvData = async () => {
      const csv = await getCsvData();
      const csvData = await csv.text();
      setData(csvData);
    };

    csvData();
  }, []);

  return (
    <MeetupPageWrapper>
      <Navbar />
      <Csv csv={data} />
    </MeetupPageWrapper>
  );
};

import React from 'react';
import { CSVWRapper } from 'src/pages/csv/style';
import { CSVWrapper, TextArea } from './style';

export const Csv: React.FC<{ csv: string }> = ({ csv }) => {
  return (
    <CSVWRapper>
      <CSVWrapper>
        <TextArea value={csv} readOnly></TextArea>
      </CSVWrapper>
    </CSVWRapper>
  );
};

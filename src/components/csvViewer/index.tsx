import React from 'react';
import { CSVWrapper, TextArea } from './style';

export const Csv: React.FC<{ csv: string }> = ({ csv }) => {
  return (
    <CSVWrapper>
      <TextArea value={csv} readOnly></TextArea>
    </CSVWrapper>
  );
};

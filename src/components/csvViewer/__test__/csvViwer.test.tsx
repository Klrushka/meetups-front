import React from 'react';
import rendered, { act } from 'react-test-renderer';
import { Csv } from '../index';
import { mockCsvData } from './__mock__/data';

it('CsvViewer render', () => {
  let component: rendered.ReactTestRenderer;

  act(() => {
    component = rendered.create(<Csv csv={mockCsvData} />);
  });

  expect(component.toJSON).toMatchSnapshot();
});

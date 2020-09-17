import React from 'react';
import { shallow } from 'enzyme';
import DiagnosisIcon from './DiagnosisIcon';

describe('Diagnosis Icon', () => {
  it('renders without crashing', () => {
    const component = shallow(<DiagnosisIcon />);
    expect(component.length).toEqual(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import VcGridRow from './';

describe('Check Grid Row', () => {
  it('renders without crashing', () => {
    const component = shallow(<VcGridRow flex={1}>TEST</VcGridRow>).dive();
    expect(component.length).toEqual(1);
  });
});

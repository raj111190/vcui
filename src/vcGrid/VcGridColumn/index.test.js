import React from 'react';
import { shallow } from 'enzyme';
import VcGridColumn from './';

describe('Check Grid Column', () => {
  it('renders without crashing', () => {
    const component = shallow(
      <VcGridColumn flex={1}>TEST</VcGridColumn>
    ).dive();
    expect(component.length).toEqual(1);
  });
});

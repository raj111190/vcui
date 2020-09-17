import React from 'react';
import { shallow } from 'enzyme';
import PlusCircleIcon from './PlusCircleIcon';

describe('Plus Circle Icon', () => {
  it('renders without crashing', () => {
    const component = shallow(<PlusCircleIcon />);
    expect(component.length).toEqual(1);
  });
});

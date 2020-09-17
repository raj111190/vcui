import React from 'react';
import { shallow } from 'enzyme';
import PlusBoxIcon from './PlusBoxIcon';

describe('Plus Box Icon', () => {
  it('renders without crashing', () => {
    const component = shallow(<PlusBoxIcon />);
    expect(component.length).toEqual(1);
  });
});

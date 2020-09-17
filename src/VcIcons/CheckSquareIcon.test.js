import React from 'react';
import { shallow } from 'enzyme';
import CheckSquareIcon from './CheckSquareIcon';

describe('Check Square Icon', () => {
  it('renders without crashing', () => {
    const component = shallow(<CheckSquareIcon />);
    expect(component.length).toEqual(1);
  });
});

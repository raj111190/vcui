import React from 'react';
import { shallow } from 'enzyme';
import CrossCircleIcon from './CrossCircleIcon';

describe('Cross Circle Icon', () => {
  it('renders without crashing', () => {
    const component = shallow(<CrossCircleIcon />);
    expect(component.length).toEqual(1);
  });
});

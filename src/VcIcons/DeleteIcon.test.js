import React from 'react';
import { shallow } from 'enzyme';
import DeleteIcon from './DeleteIcon';

describe('Delete Icon', () => {
  it('renders without crashing', () => {
    const component = shallow(<DeleteIcon />);
    expect(component.length).toEqual(1);
  });
});

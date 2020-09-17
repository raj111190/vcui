import React from 'react';
import { shallow } from 'enzyme';
import NoteIcon from './NoteIcon';

describe('Note Icon', () => {
  it('renders without crashing', () => {
    const component = shallow(<NoteIcon />);
    expect(component.length).toEqual(1);
  });
});

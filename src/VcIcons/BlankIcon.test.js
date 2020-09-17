import React from 'react';
import { shallow } from 'enzyme';
import BlankIcon from './BlankIcon';

describe('Blank Icon', () => {
  it('renders without crashing', () => {
    const component = shallow(<BlankIcon />).dive();
    expect(component.length).toEqual(1);
  });

  it('renders without crashing', () => {
    const component = shallow(<BlankIcon width={48} height={48} />).dive();
    expect(component.length).toEqual(1);
  });
});

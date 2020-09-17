import React from 'react';
import { shallow } from 'enzyme';
import DotIcon from './DotIcon';

describe('Dot Icon', () => {
  it('renders without crashing', () => {
    const component = shallow(<DotIcon />).dive();
    expect(component.length).toEqual(1);
  });

  it('renders without crashing', () => {
    const component = shallow(<DotIcon width={48} height={48} />).dive();
    expect(component.length).toEqual(1);
  });
});

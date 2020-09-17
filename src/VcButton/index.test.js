import React from 'react';
import { mount, shallow } from 'enzyme';
import VcButton from '.';

describe('VcButton', () => {
  it('renders without crashing', () => {
    const component = shallow(<VcButton />);
    expect(component).toBeDefined();
  });

  it('renders selected color', () => {
    const component = shallow(
      <VcButton isSelected color="secondary" selectedColor="primary" />
    ).dive();
    expect(component).toBeDefined();
    expect(component.props().color).toEqual('primary');
  });

  it('renders a squared button', () => {
    const component = mount(<VcButton value="Squared" squared />);
    expect(component).toBeDefined();
    expect(
      component
        .find('Button')
        .props()
        .className.includes('squared')
    ).toBe(true);
  });

  it('renders with small labels in button', () => {
    const component = shallow(<VcButton smallText={true} />);
    expect(component).toBeDefined();
  });
});

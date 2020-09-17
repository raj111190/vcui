import React from 'react';
import { shallow, mount } from 'enzyme';
import Clear from '@material-ui/icons/Clear';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import VcSearchButton from '.';

describe('VcSearchButton', () => {
  it('renders without crashing', () => {
    const component = shallow(<VcSearchButton />);
    expect(component).toBeDefined();
  });

  it('renders without crashing with all props passed', () => {
    const testFunc = () => {};
    const testText = 'test;';
    const component = shallow(
      <VcSearchButton
        value={testText}
        onSearchChange={testFunc}
        onClose={testFunc}
        onEnter={testFunc}
        searchPlaceholder={testText}
      />
    ).dive();
    expect(component.state()).toEqual({ open: true });
  });

  it('should start with open as false if have no search text', () => {
    const component = shallow(<VcSearchButton />).dive();
    expect(component.state()).toEqual({ open: false });
  });

  it('should start with open as true if have search text', () => {
    const component = shallow(<VcSearchButton value="test" />).dive();
    expect(component.state()).toEqual({ open: true });
  });

  it('popup should open on click', () => {
    const component = mount(shallow(<VcSearchButton />).get(0));
    const avatar = component.find(Avatar);
    expect(avatar).toBeDefined();
    expect(component.state().open).toEqual(false);
    avatar.simulate('click');
    expect(component.state().open).toEqual(true);
    component.unmount();
  });

  it('popup should close on click', () => {
    const component = mount(shallow(<VcSearchButton value="test" />).get(0));
    const avatar = component.find(Avatar);
    expect(avatar).toBeDefined();
    expect(component.state().open).toEqual(true);
    avatar.simulate('click');
    expect(component.state().open).toEqual(false);
    component.unmount();
  });

  it('on enter keypress handleEnter should be called with the value of the component', () => {
    let testText = 'test';
    const handleEnter = value => {
      testText = value;
    };
    const abc = 'ABC';
    const component = mount(
      <VcSearchButton value={abc} onEnter={handleEnter} />
    );
    const input = component.find(Input);
    input.simulate('keypress', { key: 'Enter' });
    expect(testText).toEqual(abc);
    component.unmount();
  });

  it('on close should call onClose function', () => {
    let testText = 'test';
    const handleClose = () => {
      testText = abc;
    };
    const abc = 'ABC';
    const component = mount(
      <VcSearchButton value={abc} onClose={handleClose} />
    );
    const clear = component.find(Clear);
    expect(clear).toBeDefined();
    clear.simulate('click');
    expect(testText).toEqual(abc);
    component.unmount();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import VcCardexWindow from '.';
import Button from '@material-ui/core/Button';
import VcGridRow from '../vcGrid/VcGridRow';
import VcButton from '../VcButton';

describe('VcCardexWindow', () => {
  let mockFunc1;
  beforeEach(() => {
    mockFunc1 = jest.fn();
  });
  it('renders without crashing', () => {
    let buttons = [];
    buttons.push({
      label: 'Discharge',
      type: 'discharge',
      callBack: mockFunc1,
    });
    buttons.push({
      label: 'save',
      type: 'save',
      callBack: mockFunc1,
    });
    buttons.push({
      label: 'refer',
      type: 'refer',
      callBack: mockFunc1,
    });
    buttons.push({
      label: 'new',
      type: 'other',
      callBack: mockFunc1,
    });

    const component = shallow(
      <VcCardexWindow buttons={buttons} rows={[1, 2]} />
    ).dive();
    expect(component).toBeDefined();

    const button1 = component
      .find(VcGridRow)
      .at(0)
      .find(Button)
      .at(0);
    button1.props().onClick();

    const button2 = component
      .find(VcGridRow)
      .at(3)
      .find(VcButton)
      .at(0);
    button2.props().onClick();

    const button3 = component
      .find(VcGridRow)
      .at(3)
      .find(VcButton)
      .at(1);
    button3.props().onClick();

    const button4 = component
      .find(VcGridRow)
      .at(3)
      .find(VcButton)
      .at(2);
    button4.props().onClick();

    const component2 = shallow(
      <VcCardexWindow secondaryBackground rows={[1, 2]} />
    ).dive();
    expect(component2).toBeDefined();
  });
});

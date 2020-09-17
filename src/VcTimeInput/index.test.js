import React from 'react';
import { mount, shallow } from 'enzyme';
import VcTimeInput from '.';
import TextField from '@material-ui/core/TextField';

describe('VcTimeInput', () => {
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
  });
  it('renders without crashing', () => {
    const component = shallow(
      <VcTimeInput onHourChange={mockFunc} onMinuteChange={mockFunc} />
    );
    expect(component).toBeDefined();
  });

  it('test onChange functions', () => {
    const component = shallow(
      <VcTimeInput
        hours={2}
        minutes={30}
        onHourChange={mockFunc}
        onMinuteChange={mockFunc}
      />
    ).dive();
    expect(component).toBeDefined();
    const hoursField = component.find(TextField).at(0);
    const minutesField = component.find(TextField).at(1);

    hoursField.simulate('change', { target: { value: '44' } });
    minutesField.simulate('change', { target: { value: '440' } });
    expect(mockFunc.mock.calls.length).toBe(0);

    hoursField.simulate('change', { target: { value: '4' } });
    minutesField.simulate('change', { target: { value: '44' } });
    expect(mockFunc.mock.calls.length).toBe(2);
  });
});

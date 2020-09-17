import React from 'react';
import { shallow } from 'enzyme';
import VcAlphaScrollList from '.';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import VcGridColumn from '../vcGrid/VcGridColumn';
import VcGridRow from '../vcGrid/VcGridRow';

describe('vcAlphaScrollList', () => {
  let mockFunc;
  let mockFunc1;
  beforeEach(() => {
    mockFunc = jest.fn();
    mockFunc1 = jest.fn();
  });
  it('renders without crashing', () => {
    const dialog = shallow(
      <VcAlphaScrollList
        selectedOptions={[
          { display: 'Abc' },
          { display: 'Bb' },
          { display: 'Dc' },
        ]}
        options={[
          { display: 'Abc' },
          { display: 'Bb' },
          { display: 'Cc' },
          { display: 'Dc' },
          { display: 'Ec' },
          { display: 'Fc' },
        ]}
        highlighted={[{ display: 'Cc' }, { display: 'Dc' }]}
        title="Add summary"
        toggleSelected={mockFunc}
        onToggle={mockFunc1}
      />
    ).dive();
    expect(dialog).toBeDefined();

    const button = dialog
      .find(VcGridRow)
      .at(0)
      .find(Button)
      .at(0);
    button.props().onClick();

    expect(mockFunc1.mock.calls.length).toBe(1);

    const close = dialog
      .find(VcGridRow)
      .at(2)
      .find(Button)
      .at(0);
    close.props().onClick();

    expect(mockFunc1.mock.calls.length).toBe(2);

    const select = dialog
      .find(VcGridColumn)
      .at(1)
      .find(ListItemSecondaryAction)
      .at(0);
    select.props().onClick();

    expect(mockFunc.mock.calls.length).toBe(1);
    dialog.unmount();
  });

  it('check states', () => {
    const component = shallow(
      <VcAlphaScrollList
        selectedOptions={[
          { display: 'Abc' },
          { display: 'Bb' },
          { display: 'Dc' },
        ]}
        options={[
          { display: 'Abc' },
          { display: 'Bb' },
          { display: 'Cc' },
          { display: 'Dc' },
          { display: 'Ec' },
          { display: 'Fc' },
        ]}
        highlighted={[{ display: 'Cc' }, { display: 'Dc' }]}
        title="Add summary"
        toggleSelected={mockFunc}
        onToggle={mockFunc1}
      />
    ).dive();
    expect(component).toBeDefined();

    expect(component.state()).toEqual({
      index: 'A',
      scroll: false,
    });
    const alpha = component
      .find(VcGridColumn)
      .at(0)
      .find('div')
      .at(1);

    expect(alpha).toBeDefined();
    alpha.simulate('click');

    expect(component.state()).toEqual({
      index: 'B',
      scroll: true,
    });

    const alpha2 = component
      .find(VcGridColumn)
      .at(0)
      .find('div')
      .at(7);
    alpha2.simulate('click');
    expect(component.state()).toEqual({
      index: 'H',
      scroll: true,
    });
    component.unmount();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import VcCardexTabs from '.';
import Button from '@material-ui/core/Button';
import VcGridRow from '../vcGrid/VcGridRow';

describe('VcCardexTabs', () => {
  let mockFunc1;
  let mockFunc2;
  beforeEach(() => {
    mockFunc1 = jest.fn();
    mockFunc2 = jest.fn();
  });
  it('renders without crashing', () => {
    const values = [
      {
        hasEdit: true,
        type: 'Nurse',
        timeDisplay: '11:30 PM',
        notesValues: 'test1',
      },
      {
        hasEdit: false,
        type: 'Nurse',
        timeDisplay: '05:45 PM',
        notesValues: 'test2',
      },
      {
        hasEdit: false,
        type: 'Doctor',
        timeDisplay: '04:00 AM',
        notesValues: 'test3',
      },
    ];
    const tabLabels = ['tab1', 'tab2', 'tab3'];
    const component = shallow(
      <VcCardexTabs
        editButtonLabel={'EDIT'}
        editTabsSizes={[1, 1, 1]}
        tabLabels={tabLabels}
        editTabs={[1, 2, 3]}
        onEditRow={mockFunc1}
        onTabChange={a => mockFunc2}
        rows={[1, 2]}
        values={values}
      />
    );
    expect(component).toBeDefined();
  });

  it('check state changes', () => {
    const values = [
      {
        hasEdit: true,
        type: 'Nurse',
        timeDisplay: '09:00 AM',
        notesValues: 'test1',
      },
      {
        hasEdit: false,
        type: 'Nurse',
        timeDisplay: '04:30 AM',
        notesValues: 'test2',
      },
      {
        hasEdit: false,
        type: 'Doctor',
        timeDisplay: '12:00 AM',
        notesValues: 'test3',
      },
    ];
    const tabLabels = ['tab1', 'tab2', 'tab3'];
    const component = shallow(
      <VcCardexTabs
        editButtonLabel={'EDIT'}
        editTabsSizes={[1, 1, 1]}
        tabLabels={tabLabels}
        editTabs={[1, 2, 3]}
        onTabChange={mockFunc2}
        rows={[1, 2]}
        values={values}
      />
    ).dive();

    expect(component.state()).toEqual({
      activeTab: 3,
    });

    const tabs = component
      .find(VcGridRow)
      .at(0)
      .find(Button)
      .at(1);

    tabs.simulate('click');

    expect(component.state()).toEqual({
      activeTab: 2,
    });
    expect(mockFunc2.mock.calls.length).toBe(1);

    const tabs2 = component
      .find(VcGridRow)
      .at(0)
      .find(Button)
      .at(0);

    tabs2.simulate('click');

    expect(component.state()).toEqual({
      activeTab: 1,
    });
  });
});

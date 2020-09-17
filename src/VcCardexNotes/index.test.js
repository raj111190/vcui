import React from 'react';
import { shallow } from 'enzyme';
import VcCardexNotes from '.';
import Button from '@material-ui/core/Button';
import VcGridRow from '../vcGrid/VcGridRow';
import VcGridColumn from '../vcGrid/VcGridColumn';

describe('VcCardexNotes', () => {
  it('renders without crashing', () => {
    const values = [
      {
        timeDisplay: '11:30 PM',
        notesValue: 'test1',
      },
      {
        type: 'Doctor',
        timeDisplay: '05:45 PM',
        notesValue: 'test2',
      },
      {
        timeDisplay: '04:00 AM',
        notesValue: 'test3',
      },
    ];
    const component = shallow(
      <VcCardexNotes
        className="classname"
        label="test"
        editTabsSizes={[1, 1, 1]}
        editTabs={[1, 2, 3]}
        rows={[1, 2]}
        values={values}
      />
    ).dive();
    expect(component).toBeDefined();
    const row1 = component.find(VcGridRow).at(0);
    expect(row1).toBeDefined();

    const data1 = component.find(VcGridRow).at(1);
    expect(data1).toBeDefined();
    const data2 = component.find(VcGridRow).at(2);
    expect(data2).toBeDefined();
    const data3 = component.find(VcGridRow).at(3);
    expect(data3).toBeDefined();

    const ediTabs1 = component
      .find(VcGridRow)
      .at(4)
      .find(VcGridColumn)
      .at(0);
    expect(ediTabs1).toBeDefined();

    const ediTabs2 = component
      .find(VcGridRow)
      .at(4)
      .find(VcGridColumn)
      .at(1);
    expect(ediTabs2).toBeDefined();

    const ediTabs3 = component
      .find(VcGridRow)
      .at(4)
      .find(VcGridColumn)
      .at(2);
    expect(ediTabs3).toBeDefined();

    const component2 = shallow(
      <VcCardexNotes classes={{ notes: 'new' }} />
    ).dive();
    expect(component2).toBeDefined();
    const component3 = shallow(<VcCardexNotes />);
    expect(component3).toBeDefined();
  });
});

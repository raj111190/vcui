import React from 'react';
import { shallow } from 'enzyme';
import VcVisitSummaryCard from '.';
import { VcButton } from '../index';
import { ListItem } from '@material-ui/core';

describe('VcVisitSummaryCard', () => {
  const timelinedateDataSize2 = [
    {
      message: 'Something taken',
      timeStamp: '01:00',
    },
    {
      message: 'Visit Started',
      timeStamp: '00:00',
    },
  ];
  const timelinedateDataSize3 = [
    {
      message: 'Something else taken',
      timeStamp: '01:30',
    },
    {
      message: 'Something taken',
      timeStamp: '01:00',
    },
    {
      message: 'Visit Started',
      timeStamp: '00:00',
    },
  ];
  const fakeFunction = () => {};

  it('renders without crashing', () => {
    const component = shallow(<VcVisitSummaryCard />);
    expect(component).toBeDefined();
  });

  it('renders with passed data (timeline of 2)', () => {
    const component = shallow(
      <VcVisitSummaryCard timeline={timelinedateDataSize2} />
    ).dive();
    expect(component).toBeDefined();
    const foundTimeline = component.find(ListItem);
    expect(foundTimeline.length).toEqual(timelinedateDataSize2.length);
  });

  it('renders with passed data (timeline of 3)', () => {
    const component = shallow(
      <VcVisitSummaryCard timeline={timelinedateDataSize3} />
    ).dive();
    expect(component).toBeDefined();
    const foundTimeline = component.find(ListItem);
    expect(foundTimeline.length).toEqual(timelinedateDataSize3.length);
  });

  it('renders with passed data (timeline size of 2) and handles props bieng updated (to timeline size of 3)', () => {
    const component = shallow(
      <VcVisitSummaryCard timeline={timelinedateDataSize2} />
    ).dive();
    expect(component).toBeDefined();
    const foundTimeline1 = component.find(ListItem);
    expect(foundTimeline1.length).toEqual(timelinedateDataSize2.length);
    const propsUpdate = {
      timeline: timelinedateDataSize3,
      classes: {},
      className: undefined,
      cardHeader: 'Visit Summary',
      endVisitText: 'End Visit',
      onEndVisit: undefined,
    };
    component.setProps(propsUpdate);
    const foundTimeline2 = component.find(ListItem);
    expect(foundTimeline2.length).toEqual(timelinedateDataSize3.length);
  });

  it('renders with an end visit action passed without crashing', () => {
    const component = shallow(
      <VcVisitSummaryCard onEndVisit={fakeFunction} />
    ).dive();
    expect(component).toBeDefined();
    const button = component.find(VcButton);
    expect(button).toBeDefined();
  });

  it('an end visit action is run when button is clicked', () => {
    let flag = false;
    const fakeEndVisitFunction = () => {
      flag = true;
    };
    const component = shallow(
      <VcVisitSummaryCard onEndVisit={fakeEndVisitFunction} />
    ).dive();
    expect(component).toBeDefined();
    const button = component.find(VcButton);
    expect(button).toBeDefined();
    button.simulate('click');
    expect(flag).toEqual(true);
  });
});

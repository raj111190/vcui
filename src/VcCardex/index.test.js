import React from 'react';
import { shallow } from 'enzyme';
import VcCardex from '.';
import Button from '@material-ui/core/Button';
import VcGridRow from '../vcGrid/VcGridRow';
import VcVisitSummaryCard from '../VcVisitSummaryCard';
import { VcButton } from '../index';
import VcCardexWindow from '../VcCardexWindow';
import VcCardexTabs from '../VcCardexTabs';

describe('VcCardex', () => {
  const defaultComponent = shallow(<VcCardex />);
  it('renders without crashing', () => {
    expect(defaultComponent).toBeDefined();
  });

  const notesButton = defaultComponent.find(VcButton).at(2);
  it('by default, the notes button should be invisible', () => {
    expect(notesButton).toEqual({});
  });

  const admitOrDischargeLabel = 'Pizza';
  const referLabel = 'Donuts';
  const notesLabel = 'Hamburger';
  const declaredComponent = shallow(
    <VcCardex
      admitOrDischargeLabel={admitOrDischargeLabel}
      referLabel={referLabel}
      notesLabel={notesLabel}
      showNotes={true}
    />
  ).dive();

  it('renders with passed properties', () => {
    expect(declaredComponent).toBeDefined();
  });

  const button1 = declaredComponent.find(VcButton).at(0);
  it('renders passed admitOrDischarge label', () => {
    expect(button1.props().value).toEqual(admitOrDischargeLabel);
  });

  const button2 = declaredComponent.find(VcButton).at(1);
  it('renders passed refer label', () => {
    expect(button2.props().value).toEqual(referLabel);
  });

  const button3 = declaredComponent.find(VcButton).at(2);
  it('The notes button should exist if asked to be shown', () => {
    expect(button3).toBeDefined();
  });
  it('renders passed notes label', () => {
    expect(button3.props().value).toEqual(notesLabel);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import {
  IconButton,
  List,
  Link,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import VcDiagnosisList, { DIAGNOSIS_CERTAINTY, getIconStyle } from '.';

describe('VcDiagnosisList', () => {
  const diagnosisData = [
    {
      uuid: '123',
      name: 'Diagnosis 1 Confirmed',
      acuity: 1,
      certainty: 'Confirmed',
    },
    {
      uuid: '124',
      name: 'Diagnosis 1 Possible',
      acuity: 1,
      certainty: 'Possible',
    },
    {
      uuid: '125',
      name: 'Diagnosis 2 Confirmed',
      acuity: 2,
      certainty: 'Confirmed',
    },
    {
      uuid: '126',
      name: 'Diagnosis 2 Possible',
      acuity: 2,
      certainty: 'Possible',
    },
    {
      uuid: '127',
      name: 'Diagnosis 2 Confirmed',
      acuity: 3,
      certainty: 'Confirmed',
    },
    {
      uuid: '128',
      name: 'Diagnosis 3 Possible',
      acuity: 3,
      certainty: 'Possible',
    },
    {
      uuid: '129',
      name: 'Diagnosis 4 Possible',
      acuity: 4,
      certainty: 'Possible',
    },
    {
      uuid: '1211',
      name: 'Diagnosis 4 Confirmed',
      acuity: 4,
      certainty: 'Confirmed',
    },
    {
      uuid: '1212',
      name: 'Diagnosis 5 Possible',
      acuity: 5,
      certainty: 'Possible',
    },
    {
      uuid: '1213',
      name: 'Diagnosis 5 Confirmed',
      acuity: 5,
      certainty: 'Confirmed',
    },
  ];
  it('renders without crashing', () => {
    const component = shallow(<VcDiagnosisList />);
    expect(component).toBeDefined();
  });

  it('renders all the diagnoses', () => {
    const component = shallow(
      <VcDiagnosisList diagnoses={diagnosisData} />
    ).dive();
    expect(component).toBeDefined();
    expect(component.find(List).get(0).props.children.length).toEqual(
      diagnosisData.length
    );
  });

  it('renders the right icon color', () => {
    const component = shallow(
      <VcDiagnosisList diagnoses={diagnosisData} />
    ).dive();
    expect(component).toBeDefined();
    const diagnosisList = component.find(ListItemIcon);
    function checkIconColor(diagnosisItem, index) {
      const diagnosis = diagnosisData[index];
      const iconStyle = getIconStyle(diagnosis);
      expect(diagnosisItem.props().style).toEqual(iconStyle);
    }
    diagnosisList.forEach(checkIconColor);
  });

  it('renders a link for confirmed diagnosis', () => {
    const component = shallow(
      <VcDiagnosisList diagnoses={diagnosisData} />
    ).dive();
    expect(component).toBeDefined();
    const diagnosisLinks = component.find(ListItemText);
    expect(diagnosisLinks.length).toEqual(diagnosisData.length);
    function checkItemLink(diagnosisItem, index) {
      const diagnosis = diagnosisData[index];
      const confirmedLink = diagnosisItem
        .parent()
        .dive()
        .find(Link)
        .find(ListItemText);
      if (diagnosis.certainty === DIAGNOSIS_CERTAINTY.POSSIBLE) {
        expect(confirmedLink.length).toEqual(0);
      }
      if (diagnosis.certainty === DIAGNOSIS_CERTAINTY.CONFIRMED) {
        expect(confirmedLink.length).toEqual(1);
      }
    }
    diagnosisLinks.forEach(checkItemLink);
  });

  it('renders an action Link', () => {
    const component = shallow(
      <VcDiagnosisList diagnoses={diagnosisData} />
    ).dive();
    expect(component).toBeDefined();
    const actionLinks = component.find(ListItemSecondaryAction);
    expect(actionLinks.length).toEqual(diagnosisData.length);
    function checkItemLink(diagnosisItem, index) {
      expect(diagnosisItem.find(Link).length).toEqual(1);
      const diagnosis = diagnosisData[index];
      if (diagnosis.certainty === DIAGNOSIS_CERTAINTY.POSSIBLE) {
        expect(diagnosisItem.find(Link).prop('children')).toEqual('Confirm');
      }
      if (diagnosis.certainty === DIAGNOSIS_CERTAINTY.CONFIRMED) {
        expect(diagnosisItem.find(Link).prop('children')).toEqual('Resolve');
      }
    }
    actionLinks.forEach(checkItemLink);
  });

  it('should call the action on action click', () => {
    const mockFunc = jest.fn();
    const component = shallow(
      <VcDiagnosisList diagnoses={diagnosisData} action={mockFunc} />
    ).dive();
    expect(component).toBeDefined();

    const secondaryAction = component.find(ListItemSecondaryAction).first();
    const link = secondaryAction.find(Link);
    link.simulate('click');
    expect(mockFunc.mock.calls.length).toBe(1);
  });

  it('should call the action on action click', () => {
    const mockFunc = jest.fn();
    const component = shallow(
      <VcDiagnosisList diagnoses={diagnosisData} onConfirmedClick={mockFunc} />
    ).dive();
    expect(component).toBeDefined();

    const diagnosisLinks = component.find(ListItemText);
    const diagnosisItem = diagnosisLinks.first();
    const confirmedLink = diagnosisItem
      .parent()
      .dive()
      .find(Link);
    confirmedLink.simulate('click');
    expect(mockFunc.mock.calls.length).toBe(1);
  });

  it('renders a delete icon that can be clicked', () => {
    let test = null;
    const mockFunction = diagnosis => {
      test = diagnosis.uuid;
    };
    const component = shallow(
      <VcDiagnosisList diagnoses={diagnosisData} onDelete={mockFunction} />
    ).dive();
    expect(component).toBeDefined();

    const deleteIcons = component.find(IconButton);
    const deleteIcon = deleteIcons.first();
    expect(deleteIcon).toBeDefined();
    deleteIcon.simulate('click');
    expect(test).toBe('123');
  });
});

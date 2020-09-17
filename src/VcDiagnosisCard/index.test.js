import React from 'react';
import { shallow } from 'enzyme';
import VcDiagnosisCard, {
  getConfirmedDiagnoses,
  getPossibleDiagnoses,
} from '.';
import { VcDiagnosisList } from '../index';

describe('VcDiagnsosisCard', () => {
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
    const component = shallow(<VcDiagnosisCard />);
    expect(component).toBeDefined();
  });

  it('renders possible and confirmed diagnosis separately', () => {
    const component = shallow(
      <VcDiagnosisCard diagnoses={diagnosisData} />
    ).dive();
    const [confirmedDiagnosisList, possibleDiagnosisList] = component.find(
      VcDiagnosisList
    );

    const confirmedDiagnoses = getConfirmedDiagnoses(diagnosisData);
    const possibleDiagnoses = getPossibleDiagnoses(diagnosisData);

    expect(confirmedDiagnosisList.props.diagnoses).toEqual(confirmedDiagnoses);
    expect(possibleDiagnosisList.props.diagnoses).toEqual(possibleDiagnoses);
  });
});

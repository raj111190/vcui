export const MENU_STATUS = {
  NOT_STARTED: 'NOT_STARTED',
  STARTED: 'STARTED',
  COMPLETED: 'COMPLETED',
};

const ancVisits = [
  { display: '1st Visit', status: MENU_STATUS.COMPLETED },
  { display: '2nd Visit', status: MENU_STATUS.COMPLETED },
  { display: '3rd Visit', status: MENU_STATUS.COMPLETED },
  { display: '4th Visit', status: MENU_STATUS.COMPLETED },
  { display: '5th Visit', status: MENU_STATUS.COMPLETED },
  { display: '6th Visit', status: MENU_STATUS.COMPLETED },
];
const labors = [
  { display: 'ANC Summary', status: MENU_STATUS.COMPLETED },
  { display: 'Assessment', status: MENU_STATUS.STARTED },
  { display: 'Active Labor', status: MENU_STATUS.NOT_STARTED },
];
const pncVisits = [
  { display: 'Post-delivery', status: MENU_STATUS.NOT_STARTED },
  { display: 'PNC Visit 1', status: MENU_STATUS.NOT_STARTED },
  { display: 'PNC Visit 2', status: MENU_STATUS.NOT_STARTED },
];
const babyVisits = [
  { display: 'Vaccine 1', status: MENU_STATUS.COMPLETED },
  { display: 'Vaccine 2', status: MENU_STATUS.NOT_STARTED },
  { display: 'Vaccine 3', status: MENU_STATUS.NOT_STARTED },
  { display: 'Vaccine 4', status: MENU_STATUS.NOT_STARTED },
];

export const menus = [
  { display: 'Intake', status: MENU_STATUS.COMPLETED },
  { display: 'History', status: MENU_STATUS.STARTED },
  { display: 'Vitals', status: MENU_STATUS.NOT_STARTED },
  {
    display: 'ANC',
    childrenMenu: ancVisits,
  },
  {
    display: 'Labor',
    childrenMenu: labors,
  },
  {
    display: 'PNC',
    childrenMenu: pncVisits,
  },
  {
    display: 'Baby',
    childrenMenu: babyVisits,
  },
];

export const diagnosis = [
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

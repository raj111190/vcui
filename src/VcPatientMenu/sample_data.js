const MENU_STATUS = {
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
    status: MENU_STATUS.STARTED,
    childrenMenu: babyVisits,
  },
];

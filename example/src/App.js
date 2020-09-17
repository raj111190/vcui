import React, { Component } from 'react';

import {
  VcButton,
  VcDiagnosisCard,
  VcDiagnosisList,
  VcPatientMenu,
} from '@vecnacares/vc-ui';

import { diagnosis, menus } from './sample_data';

export default class App extends Component {
  render() {
    return (
      <div>
        <div style={{ float: 'left', width: '200px' }}>
          <VcPatientMenu
            menus={menus}
            onMenuClick={menu => console.log(menu)}
          />
        </div>
        <div>
          <VcButton value="Button" color="primary" isSelected />
          <br />
          <br />
          <br />

          <div style={{ width: '470px', margin: 'auto' }}>
            <VcDiagnosisCard diagnoses={diagnosis} />
          </div>

          <br />
          <br />
          <div style={{ width: '470px', margin: 'auto' }}>
            <VcDiagnosisList diagnoses={diagnosis} />
          </div>
        </div>
      </div>
    );
  }
}

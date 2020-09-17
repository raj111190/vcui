import React from 'react';
import { shallow } from 'enzyme';
import VcGrid from './';
import VcGridRow from './VcGridRow';
import VcGridColumn from './VcGridColumn';

describe('Check Grid', () => {
  it('renders without crashing', () => {
    const component = shallow(
      <VcGrid>
        <VcGridRow>
          <VcGridColumn>Column1</VcGridColumn>
          <VcGridColumn>Column2</VcGridColumn>
        </VcGridRow>
      </VcGrid>
    ).dive();
    expect(component.length).toEqual(1);
  });
});

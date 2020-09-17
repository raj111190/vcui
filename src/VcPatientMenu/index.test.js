import React from 'react';
import { shallow } from 'enzyme';
import { Collapse, ListItem, ListItemIcon } from '@material-ui/core';
import CheckCircleOutlined from '@material-ui/icons/CheckCircleOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ExpandLess from '@material-ui/icons/ExpandLess';
import CheckCircle from '@material-ui/icons/CheckCircle';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { VcPatientMenu } from '../index';
import { MENU_STATUS } from './index';
import { DotIcon } from '../VcIcons';
import { menus as menuData } from './sample_data';

describe('PatientMenu', () => {
  it('should render without errors', () => {
    const component = shallow(<VcPatientMenu />);
    expect(component).toBeDefined();
  });

  it('should render leaf nodes', () => {
    const menus = [
      { display: 'abc', status: MENU_STATUS.NOT_STARTED },
      { display: 'def', status: MENU_STATUS.STARTED },
      { display: 'jhi', status: MENU_STATUS.COMPLETED },
    ];
    const onMenuClick = jest.fn();
    const component = shallow(
      <VcPatientMenu menus={menus} onMenuClick={onMenuClick} />
    );
    expect(component).toBeDefined();
    const rendered = component.dive().find(ListItem);
    expect(rendered.length).toEqual(menus.length);

    // check menu icons
    const notStartedIcon = rendered.at(0).find(ListItemIcon);
    expect(notStartedIcon.find(DotIcon).length).toEqual(1);
    const startedIcon = rendered.at(1).find(ListItemIcon);
    expect(startedIcon.find(DotIcon).length).toEqual(1);
    const completedIcon = rendered.at(2).find(ListItemIcon);
    expect(completedIcon.find(CheckCircleOutlined).length).toEqual(1);

    rendered.at(0).simulate('click');
    expect(onMenuClick.mock.calls.length).toEqual(1);
  });

  it('should render nodes with children', () => {
    const menus = [
      {
        display: 'parent',
        childrenMenu: [
          { display: 'abc', status: MENU_STATUS.NOT_STARTED },
          { display: 'def', status: MENU_STATUS.STARTED },
          { display: 'jhi', status: MENU_STATUS.COMPLETED },
        ],
      },
    ];
    const component = shallow(<VcPatientMenu menus={menus} />).dive();
    expect(component).toBeDefined();
    const parent = component
      .dive()
      .children()
      .at(0);
    expect(parent.length).toEqual(menus.length);

    // check expand more icon
    expect(parent.find(ExpandMore).length).toEqual(1);
    // check parent icon
    const parentIcon = parent.at(0).find(ListItemIcon);
    expect(parentIcon.find(MoreHorizIcon).length).toEqual(1);

    const collapsedChildren = component
      .dive()
      .children()
      .at(1);
    // should start collapsed
    expect(collapsedChildren.prop('in')).toEqual(false);
    const childrenMenus = collapsedChildren.find(ListItem);
    expect(childrenMenus.length).toEqual(menus[0].childrenMenu.length);

    // check children menu icons
    const notStartedIcon = childrenMenus.at(0).find(ListItemIcon);
    expect(notStartedIcon.find(DotIcon).length).toEqual(1);
    const startedIcon = childrenMenus.at(1).find(ListItemIcon);
    expect(startedIcon.find(DotIcon).length).toEqual(1);
    const completedIcon = childrenMenus.at(2).find(ListItemIcon);
    expect(completedIcon.find(CheckCircle).length).toEqual(1);
  });

  it('should open menu on click', () => {
    const menus = [
      {
        display: 'parent',
        childrenMenu: [
          { display: 'abc', status: MENU_STATUS.NOT_STARTED },
          { display: 'def', status: MENU_STATUS.STARTED },
          { display: 'jhi', status: MENU_STATUS.COMPLETED },
        ],
      },
    ];
    const component = shallow(<VcPatientMenu menus={menus} />).dive();
    expect(component).toBeDefined();
    let parent = component
      .dive()
      .children()
      .at(0);

    // check expand more icon
    expect(parent.find(ExpandMore).length).toEqual(1);

    let collapsedChildren = component
      .dive()
      .children()
      .at(1);
    // should start collapsed
    expect(collapsedChildren.prop('in')).toEqual(false);

    parent.simulate('click');

    parent = component
      .dive()
      .children()
      .at(0);

    // should switch to expand less
    expect(parent.find(ExpandLess).length).toEqual(1);
    collapsedChildren = component
      .dive()
      .children()
      .at(1);
    // should open now
    expect(collapsedChildren.prop('in')).toEqual(true);
  });

  it('should perform the action on menu click', () => {
    const menus = [
      {
        display: 'parent',
        childrenMenu: [
          { display: 'abc', status: MENU_STATUS.NOT_STARTED },
          { display: 'def', status: MENU_STATUS.STARTED },
          { display: 'jhi', status: MENU_STATUS.COMPLETED },
        ],
      },
    ];
    const onMenuClick = jest.fn();
    const component = shallow(
      <VcPatientMenu menus={menus} onMenuClick={onMenuClick} />
    ).dive();
    expect(component).toBeDefined();
    const parent = component
      .dive()
      .children()
      .at(0);
    expect(parent.length).toEqual(menus.length);

    const collapsedChildren = component
      .dive()
      .children()
      .at(1);
    const childrenMenus = collapsedChildren.find(ListItem);
    expect(childrenMenus.length).toEqual(menus[0].childrenMenu.length);

    const firstChild = childrenMenus.at(0);
    firstChild.simulate('click');
    expect(onMenuClick.mock.calls.length).toEqual(1);
  });

  it('can render a complex menu', () => {
    const component = shallow(<VcPatientMenu menus={menuData} />).dive();
    const childMenuData = menuData.filter(data => !!data.childrenMenu);
    const parentMenus = component.children().filter(ListItem);
    const childMenus = component.children().filter(Collapse);
    expect(parentMenus.length).toEqual(menuData.length);

    childMenus.forEach((menu, index) => {
      const children = menu.find(ListItem);
      const childrenData = childMenuData[index].childrenMenu;
      expect(children.length).toEqual(childrenData.length);
    });
  });
});

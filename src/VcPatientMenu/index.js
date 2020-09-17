import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CheckCircleOutlined from '@material-ui/icons/CheckCircleOutlined';
import CheckCircle from '@material-ui/icons/CheckCircle';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import BlankIcon from '../VcIcons/BlankIcon';
import DotIcon from '../VcIcons/DotIcon';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    // paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    marginTop: '8px',
    marginBottom: '8px',
  },
  /* Styles applied to the inner `component` `button`. */
  menuItemButton: {
    '&:hover,&:focus': {
      textDecoration: 'none',
      backgroundColor: theme.palette.background.paper,
    },
  },
  menuItemButtonNested: {
    '&:hover,&:focus': {
      textDecoration: 'none',
      backgroundColor: theme.palette.primary.main,
    },
  },
  menuIcon: {
    marginRight: '0px',
    zIndex: 1,
    color: theme.palette.primary.light,
  },
  menuIconNested: {
    marginRight: '0px',
    zIndex: 1,
    color: theme.palette.primary.contrastText,
  },
  menuIconCompleted: {
    zIndex: 1,
    marginRight: '0px',
    borderRadius: '50%',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
  },
  menuIconChildCompleted: {
    zIndex: 1,
    marginRight: '0px',
    borderRadius: '50%',
    color: theme.palette.background.paper,
    backgroundColor: theme.palette.primary.main,
  },
  menuIconChild: {
    width: '16px',
    height: '16px',
    marginLeft: '6px',
  },
  menuIconNotStarted: {
    zIndex: 1,
    marginRight: '0px',
    borderRadius: '50%',
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.main,
  },
  menuIconStarted: {
    zIndex: 1,
    marginRight: '0px',
    borderRadius: '50%',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  hLine: {
    borderLeft: `2px solid ${theme.palette.primary.main}`,
    top: '32px',
    left: '28px',
    width: '1px',
    height: '85%',
    display: 'block',
    position: 'absolute',
    overflow: 'hidden',
  },
  hOutline: {
    top: 0,
    left: 'auto',
    width: '28px',
    height: '100%',
    display: 'block',
    zIndex: '0',
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.main,
  },
  hOutlineFirst: {
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
  },
  hOutlineLast: {
    borderBottomLeftRadius: '16px',
    borderBottomRightRadius: '16px',
  },
});

export const MENU_STATUS = {
  NOT_STARTED: 'NOT_STARTED',
  STARTED: 'STARTED',
  COMPLETED: 'COMPLETED',
};

const getParentMenuIcon = status => {
  switch (status) {
    case MENU_STATUS.COMPLETED:
      return <CheckCircle />;
    case MENU_STATUS.STARTED:
      return <MoreHorizIcon />;
    default:
      return <BlankIcon />;
  }
};

const VcPatientMenu = props => {
  const { menus, selectedMenu, classes, onMenuClick } = props;

  const initialMenuState = menus
    .filter(menu => menu.childrenMenu && menu.childrenMenu.length)
    .reduce((acc, menu) => {
      acc[menu.display] = false;
      return acc;
    }, {});
  const [menuState, setMenuState] = useState(initialMenuState);

  const isOpen = menu => {
    return menuState[menu];
  };

  const toggleMenu = menu => {
    const updatedState = { ...menuState };
    updatedState[menu] = !updatedState[menu];
    setMenuState(updatedState);
  };

  /**
   * Get the status of the parent menu based on its children menu
   * If all the children menu are completed, then the parent is completed.
   * If any of it's children is started, then the parent is started.
   * Otherwise, it's not started.
   * @param children children menu
   * @return {string} parent status based on children status
   */
  const getParentStatus = children => {
    const parentStatus = children.reduce(
      (acc, child) => {
        const completed = child.status === MENU_STATUS.COMPLETED;
        const started =
          child.display === selectedMenu ||
          child.status === MENU_STATUS.STARTED ||
          completed;
        acc.started = acc.started || started;
        acc.completed = acc.completed && completed;
        return acc;
      },
      { started: false, completed: true }
    );
    if (parentStatus.completed) {
      return MENU_STATUS.COMPLETED;
    }
    if (parentStatus.started) {
      return MENU_STATUS.STARTED;
    }
    return MENU_STATUS.NOT_STARTED;
  };

  const getMenuIcon = (status, isChild) => {
    switch (status) {
      case MENU_STATUS.COMPLETED:
        return isChild ? (
          <ListItemIcon className={classes.menuIconChildCompleted}>
            <CheckCircle className={classes.menuIconChild} />
          </ListItemIcon>
        ) : (
          <ListItemIcon className={classes.menuIconCompleted}>
            <CheckCircleOutlined />
          </ListItemIcon>
        );

      case MENU_STATUS.STARTED:
        return (
          <ListItemIcon className={classes.menuIconStarted}>
            {isChild ? (
              <DotIcon r={0.5} className={classes.menuIconChild} />
            ) : (
              <DotIcon />
            )}
          </ListItemIcon>
        );
      default:
        return (
          <ListItemIcon className={classes.menuIconNotStarted}>
            {isChild ? (
              <DotIcon r={0.5} className={classes.menuIconChild} />
            ) : (
              <DotIcon />
            )}
          </ListItemIcon>
        );
    }
  };

  const renderSubMenu = subMenus => (
    <List component="div" disablePadding>
      {subMenus.map((menu, index) => {
        return (
          <ListItem
            button
            key={menu.display}
            classes={{
              button: classes.menuItemButton,
            }}
            onClick={() => onMenuClick && onMenuClick(menu)}
          >
            <ListItemIcon className={classes.menuIcon}>
              {getMenuIcon(menu.status, true)}
            </ListItemIcon>
            <ListItemText
              primary={menu.display}
              primaryTypographyProps={{ color: 'primary' }}
            />
            <div
              className={cx(classes.hOutline, {
                [classes.hOutlineFirst]: index === 0,
                [classes.hOutlineLast]: index === subMenus.length - 1,
              })}
            />
          </ListItem>
        );
      })}
    </List>
  );

  const renderMenuItem = menu => {
    const { display, status, childrenMenu } = menu;
    return childrenMenu && childrenMenu.length ? (
      <React.Fragment key={display}>
        <ListItem
          button
          className={classes.nested}
          onClick={() => toggleMenu(display)}
          classes={{
            button: classes.menuItemButtonNested,
          }}
        >
          <ListItemIcon className={classes.menuIconNested}>
            {status
              ? getParentMenuIcon(status)
              : getParentMenuIcon(getParentStatus(childrenMenu))}
          </ListItemIcon>
          <ListItemText primary={display} disableTypography />
          {isOpen(display) ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={isOpen(display)} timeout="auto" unmountOnExit>
          {renderSubMenu(childrenMenu)}
        </Collapse>
      </React.Fragment>
    ) : (
      <ListItem
        button
        classes={{ button: classes.menuItemButton }}
        key={display}
        onClick={() => onMenuClick && onMenuClick(menu)}
      >
        {getMenuIcon(status, false)}
        <ListItemText
          primary={display}
          primaryTypographyProps={{ color: 'primary' }}
        />
      </ListItem>
    );
  };

  return (
    <List component="nav" className={classes.root}>
      {menus.map(renderMenuItem)}
      <div className={classes.hLine} />
    </List>
  );
};

VcPatientMenu.propTypes = {
  /**
   * Injected by withStyles
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.shape(),
  /**
   * List of menu items to display. Only one level nesting is supported
   */
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      display: PropTypes.string.isRequired,
      status: PropTypes.oneOf(Object.values(MENU_STATUS)),
      childrenMenu: PropTypes.arrayOf(
        PropTypes.shape({
          display: PropTypes.string.isRequired,
          status: PropTypes.oneOf(Object.values(MENU_STATUS)).isRequired,
        })
      ),
    })
  ),
  /**
   * The name of the selected menu
   */
  selectedMenu: PropTypes.string,
  /**
   * Callback to call when menu is clicked
   */
  onMenuClick: PropTypes.func,
};

VcPatientMenu.defaultProps = {
  menus: [],
  classes: {},
  selectedMenu: undefined,
  onMenuClick: undefined,
};

export default withStyles(styles)(VcPatientMenu);

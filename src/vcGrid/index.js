import React from 'react';
import Proptypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from '@material-ui/core';

/**
 * A Grid component for arranging other nodes using flex
 * @param {*} props
 */
const styles = theme => ({
  grid: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
});
const VcGrid = props => {
  const { classes } = props;
  return (
    <div className={cx(classes.grid, props.className)}>{props.children}</div>
  );
};

VcGrid.propTypes = {
  /** nodes to be displayed within the grid */
  children: Proptypes.node,
  /** class to be added to the grid */
  className: Proptypes.string,
};

VcGrid.defaultProps = {};

export default withStyles(styles)(VcGrid);

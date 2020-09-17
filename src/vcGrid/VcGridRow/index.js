import React from 'react';
import Proptypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from '@material-ui/core';

/**
 * Grid Row flex container that arranges children in a row
 * @param {*} props
 */
const styles = theme => ({
  row: {
    flex: 'auto',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    overflowX: 'auto',
  },
});
const VcGridRow = props => {
  const { classes } = props;
  return (
    <div
      style={{ flex: props.flex }}
      className={cx(classes.row, props.className)}
    >
      {props.children}
    </div>
  );
};

VcGridRow.propTypes = {
  /** Nodes to be displayed in the grid row */
  children: Proptypes.node,
  /** a number for the flex ratio */
  flex: Proptypes.number,
};

VcGridRow.defaultProps = {
  flex: 1,
};

export default withStyles(styles)(VcGridRow);

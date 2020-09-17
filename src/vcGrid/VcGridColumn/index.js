import React from 'react';
import Proptypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from '@material-ui/core';

/**
 * Grid Column flex container that arranges children in a column
 * @param {*} props
 */

const styles = theme => ({
  column: {
    flex: 'auto',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    overflowY: 'auto',
  },
});

const VcGridColumn = props => {
  const { classes } = props;
  return (
    <div
      style={{ flex: props.flex }}
      className={cx(classes.column, props.className)}
    >
      {props.children}
    </div>
  );
};

VcGridColumn.propTypes = {
  /** Nodes to be displayed in the grid column */
  children: Proptypes.node,
  /** a number for the flex ratio */
  flex: Proptypes.number,
};

VcGridColumn.defaultProps = {
  flex: 1,
};

export default withStyles(styles)(VcGridColumn);

import React from 'react';
import Proptypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import VcGridRow from '../vcGrid/VcGridRow';

/**
 * A component to present enter time values
 * @param {*} props
 */
const styles = theme => ({
  root: {
    maxWidth: '90px',
  },
  hours: {
    minWidth: '20px',
    maxWidth: '25px',
    margin: '0px',
  },
  minutes: {
    minWidth: '20px',
    maxWidth: '25px',
    margin: '0px',
    marginLeft: '5px',
  },
  seperator: {
    marginTop: '5px',
  },
});

const handleHourChange = (event, onChange) => {
  const value = event.target.value;
  if (value >= 0 && value <= 23) {
    onChange(value);
  }
};

const handleMinuteChange = (event, onChange) => {
  const value = event.target.value;
  if (value >= 0 && value <= 59) {
    onChange(value);
  }
};

const VcTimeInput = props => {
  const {
    classes,
    className,
    hours,
    minutes,
    onHourChange,
    onMinuteChange,
  } = props;
  return (
    <VcGridRow className={cx(className, classes.root)}>
      <TextField
        className={classes.hours}
        value={hours}
        onChange={value => handleHourChange(value, onHourChange)}
      />
      <div className={classes.seperator}>:</div>
      <TextField
        className={classes.minutes}
        value={minutes}
        onChange={value => handleMinuteChange(value, onMinuteChange)}
      />
    </VcGridRow>
  );
};
//}

VcTimeInput.propTypes = {
  /** The class name to apply to the component */
  className: Proptypes.string,
  /** time value in hours */
  hours: Proptypes.string,
  /** time value in minutes */
  minutes: Proptypes.string,
  /** callback function for change in hours */
  onHourChange: Proptypes.func.isRequired,
  /** callback function for change in minutes */
  onMinuteChange: Proptypes.func.isRequired,
};

VcTimeInput.defaultProps = {
  hours: '',
  minutes: '',
  className: '',
};

export default withStyles(styles)(VcTimeInput);

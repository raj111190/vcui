import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import cx from 'classnames';
import VcButton from '../VcButton';

const styles = theme => ({
  visitStatus: {
    position: 'relative',
    height: '100%',
  },
  statusLabel: {
    color: theme.palette.inherit,
    fontSize: '13px',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    display: 'inline-flex',
    width: '100%',
    position: 'absolute',
    bottom: '0',
    justifyContent: 'space-between',
    textTransform: 'uppercase',
  },
  notesButton: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.contrastText,
    border: '2px solid',
    borderColor: theme.palette.primary.main,
    hover: {
      color: theme.palette.inherit,
    },
  },
  invisible: {
    visibility: 'hidden',
  },
  notes: {
    overflow: 'auto',
    maxHeight: '170px',
  },
});

/**
 * A component to present the Visit Cardex
 * @param {*} props
 */
const vcCardex = props => {
  const {
    className,
    classes,
    visitStatus,
    admitOrDischargeLabel,
    onAdmitOrDischarge,
    showNotes,
    onNotes,
    notesLabel,
    onRefer,
    referLabel,
    allNotes,
  } = props;

  return (
    <div className={cx(classes.visitStatus, className)}>
      <div className={classes.statusLabel}> {visitStatus}</div>
      <div className={classes.notes}>{allNotes}</div>
      <div className={classes.buttonContainer}>
        <VcButton
          color="primary"
          squared
          onClick={onAdmitOrDischarge}
          value={admitOrDischargeLabel}
          size="small"
          smallText={true}
        />
        <VcButton
          squared
          color="secondary"
          onClick={onRefer}
          value={referLabel}
          size="small"
          smallText={true}
        />
        <VcButton
          className={cx(
            classes.notesButton,
            showNotes ? undefined : classes.invisible
          )}
          squared
          onClick={onNotes}
          value={notesLabel}
          size="small"
          smallText={true}
        />
      </div>
    </div>
  );
};

vcCardex.propTypes = {
  /** The class name to apply to the top level component */
  className: PropTypes.string,
  /** string with the status to be displayed */
  visitStatus: PropTypes.string,
  /** text for AdmitOrDischarge button */
  admitOrDischargeLabel: PropTypes.string,
  /** callback function for AdmitOrDischarge action */
  onAdmitOrDischarge: PropTypes.func,
  /** Boolean that controls if the Button is seen or not */
  showNotes: PropTypes.bool,
  /** callback function for Notes action */
  onNotes: PropTypes.func,
  /** text for Notes button */
  notesLabel: PropTypes.string,
  /** callback function for Refer action */
  onRefer: PropTypes.func,
  /** text for Refer button */
  referLabel: PropTypes.string,
  /** notes for the cardex */
  allNotes: PropTypes.any,
};

vcCardex.defaultProps = {
  className: undefined,
  visitStatus: 'Not Admitted',
  admitOrDischargeLabel: 'Admit',
  onAdmitOrDischarge: undefined,
  showNotes: false,
  onNotes: undefined,
  notesLabel: 'Notes',
  onRefer: undefined,
  referLabel: 'Refer',
  allNotes: '',
};

export default withStyles(styles)(vcCardex);

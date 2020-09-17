import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  withStyles,
} from '@material-ui/core';
import DiagnosisIcon from '../VcIcons/DiagnosisIcon';
import DeleteIcon from '../VcIcons/DeleteIcon';

/**
 * Diagnosis Certainty
 * @type {{POSSIBLE: string, CONFIRMED: string}}
 */
export const DIAGNOSIS_CERTAINTY = {
  CONFIRMED: 'Confirmed',
  POSSIBLE: 'Possible',
};

/**
 * Acuity color mapping
 * Each acuity is color coded
 * @type {{"1": string, "2": string, "3": string, "4": string, "5": string}}
 */
export const ACUITY_COLORS = {
  1: '#8a0301',
  2: '#f24c51',
  3: '#e4d302',
  4: '#03780f',
  5: '#abb2b9',
};

/**
 * ListItemLink
 * Wrapper around ListItem to include links as LinkItem
 * @param props component properties
 * @returns {*}
 * @constructor
 */
const ListItemLink = props => {
  const { children, className, ...otherProps } = props;
  return (
    <ListItem component="div" className={className}>
      <Link {...otherProps}>{children}</Link>
    </ListItem>
  );
};

ListItemLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

ListItemLink.defaultProps = {
  children: undefined,
  className: undefined,
};

const styles = theme => ({
  diagnosisItem: {
    paddingTop: '0px',
  },
  diagnosisIcon: {
    marginRight: theme.spacing.unit,
    alignItems: 'center',
    margin: 'auto',
    borderRadius: '50%',
    padding: '5px',
  },
  deleteIconListIcon: {
    marginRight: theme.spacing.unit,
    alignItems: 'center',
    margin: 'auto',
    borderRadius: '50%',
    padding: '5px',
  },
  deleteIcon: {
    color: theme.palette.primary.main,
  },
  diagnosisText: {
    padding: 0,
    textAlign: 'left',
    marginTop: '6px',
    marginRight: '6px',
  },
  possibleDiagnosisText: {
    marginRight: '48px',
  },
  diagnosis: {},
  upperCase: {
    textTransform: 'uppercase',
  },
});

export function getIconStyle(diagnosis) {
  if (diagnosis.certainty === DIAGNOSIS_CERTAINTY.CONFIRMED) {
    return {
      color: '#FFFFFF',
      backgroundColor: ACUITY_COLORS[diagnosis.acuity],
    };
  }
  return {
    color: ACUITY_COLORS[diagnosis.acuity],
  };
}

/**
 * Displays Diagnosis List
 * @param props component properties
 * @returns {*}
 * @constructor
 */
const VcDiagnosisList = props => {
  const {
    classes,
    className,
    diagnoses,
    action,
    confirmText,
    resolveText,
    onConfirmedClick,
    onDelete,
  } = props;

  function renderDiagnosis(diagnosis) {
    return (
      <React.Fragment key={diagnosis.uuid}>
        <ListItem className={classes.diagnosisItem}>
          {onDelete ? (
            <ListItemIcon className={classes.deleteIconListIcon}>
              <IconButton onClick={() => onDelete(diagnosis)}>
                <DeleteIcon className={classes.deleteIcon} />
              </IconButton>
            </ListItemIcon>
          ) : null}
          <ListItemIcon
            className={classes.diagnosisIcon}
            style={getIconStyle(diagnosis)}
          >
            <DiagnosisIcon />
          </ListItemIcon>
          {diagnosis.certainty === DIAGNOSIS_CERTAINTY.CONFIRMED ? (
            <ListItemLink
              component="button"
              variant="body1"
              onClick={() =>
                onConfirmedClick && onConfirmedClick(diagnosis.uuid)
              }
              className={classes.diagnosisText}
            >
              <ListItemText
                className={classes.diagnosisText}
                primary={diagnosis.name}
                disableTypography
              />
            </ListItemLink>
          ) : (
            <ListItemText
              primary={diagnosis.name}
              className={cx(
                classes.diagnosisText,
                classes.possibleDiagnosisText
              )}
            />
          )}
          <ListItemSecondaryAction>
            <Link
              component="button"
              className={classes.upperCase}
              onClick={() => action && action(diagnosis)}
            >
              {diagnosis.certainty === DIAGNOSIS_CERTAINTY.CONFIRMED
                ? resolveText
                : confirmText}
            </Link>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider component="li" style={{ marginLeft: '48px' }} />
      </React.Fragment>
    );
  }
  return (
    <List className={cx(classes.diagnosis, className)}>
      {diagnoses.map(renderDiagnosis)}
    </List>
  );
};

VcDiagnosisList.propTypes = {
  /**
   * Css classes automatically injected by Material UI theme.
   */
  classes: PropTypes.shape({}),
  /**
   * Diagnosis list to display
   */
  diagnoses: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string,
      name: PropTypes.string,
      acuity: PropTypes.oneOf([1, 2, 3, 4, 5]),
      certainty: PropTypes.oneOf([
        DIAGNOSIS_CERTAINTY.CONFIRMED,
        DIAGNOSIS_CERTAINTY.POSSIBLE,
      ]),
    })
  ),
  /**
   * Callback function to be called when the action is clicked
   */
  action: PropTypes.func,
  /**
   * The class name to apply to the top level component
   */
  className: PropTypes.string,
  /**
   * Confirm text to display
   */
  confirmText: PropTypes.string,
  /**
   * Resolve text to display
   */
  resolveText: PropTypes.string,

  /**
   * Callback function to be called when the confirmed diagnosis is clicked
   */
  onConfirmedClick: PropTypes.func,

  /**
   * Callback function to be called when the confirmed diagnosis is clicked
   */
  onDelete: PropTypes.func,
};

VcDiagnosisList.defaultProps = {
  diagnoses: [],
  action: undefined,
  classes: {},
  className: undefined,
  confirmText: 'Confirm',
  resolveText: 'Resolve',
  onConfirmedClick: undefined,
  onDelete: undefined,
};

export default withStyles(styles)(VcDiagnosisList);

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Divider, Grid, withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import VcButton from '../VcButton';
import VcDiagnosisList, { DIAGNOSIS_CERTAINTY } from '../VcDiagnosisList';

const styles = theme => ({
  root: {},
  cardHeader: {
    width: '100%',
    height: '36px',
    boxSizing: 'border-box',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '0px',
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    boxShadow: 'none',
  },
  cardHeaderText: {
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: '16px',
    color: theme.palette.primary.contrastText,
    textAlign: 'left',
    lineHeight: 2,
    paddingLeft: theme.spacing.unit,
  },
  actions: {
    padding: theme.spacing.unit,
  },
  content: {},
  confirmed: {
    padding: theme.spacing.unit,
  },
  confirmedLabel: {
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: '0.9em',
    textTransform: 'uppercase',
  },
  possible: {
    padding: theme.spacing.unit,
  },
  possibleLabel: {
    fontSize: '0.9em',
    textTransform: 'uppercase',
  },
  divider: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
  },
  diagnosis: {
    maxHeight: '120px',
    overflow: 'auto',
    paddingTop: 0,
  },
});

export function getConfirmedDiagnoses(diagnoses) {
  return diagnoses.filter(
    diagnosis =>
      diagnosis.certainty &&
      diagnosis.certainty.toUpperCase() ===
        DIAGNOSIS_CERTAINTY.CONFIRMED.toUpperCase()
  );
}

export function getPossibleDiagnoses(diagnoses) {
  return diagnoses.filter(
    diagnosis =>
      diagnosis.certainty &&
      diagnosis.certainty.toUpperCase() ===
        DIAGNOSIS_CERTAINTY.POSSIBLE.toUpperCase()
  );
}

/**
 * Displays possible and confirmed diagnoses in a card
 * @param props component properties
 * @returns {*}
 * @constructor
 */
const VcDiagnosisCard = props => {
  const {
    classes,
    diagnoses,
    onConfirm,
    onResolve,
    onConfirmedClick,
    className,
    cardHeader,
    confirmedText,
    possibleText,
    addMoreText,
    onAddMore,
    onDelete,
  } = props;

  const confirmedDiagnoses = getConfirmedDiagnoses(diagnoses);
  const possibleDiagnoses = getPossibleDiagnoses(diagnoses);

  return (
    <Paper className={cx(classes.root, className)} square>
      <div className={classes.cardHeader}>
        <Typography variant="subtitle1" className={classes.cardHeaderText}>
          {cardHeader}
        </Typography>
      </div>
      <Grid container className={classes.content}>
        <Grid container className={classes.confirmed}>
          <Grid item xs={3}>
            <Typography
              variant="body1"
              className={classes.confirmedLabel}
              color="primary"
            >
              {confirmedText}
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <VcDiagnosisList
              diagnoses={confirmedDiagnoses}
              action={onResolve}
              className={classes.diagnosis}
              onConfirmedClick={onConfirmedClick}
              onDelete={onDelete}
            />
          </Grid>
        </Grid>
        <Grid container>
          <Divider className={classes.divider} />
        </Grid>
        <Grid container className={classes.possible}>
          <Grid item xs={3}>
            <Typography variant="body1" className={classes.possibleLabel}>
              {possibleText}
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <VcDiagnosisList
              diagnoses={possibleDiagnoses}
              action={onConfirm}
              className={classes.diagnosis}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="flex-end" className={classes.actions}>
        <VcButton
          value={addMoreText}
          color="primary"
          squared
          size="small"
          onClick={onAddMore}
        >
          <AddIcon />
        </VcButton>
      </Grid>
    </Paper>
  );
};

VcDiagnosisCard.propTypes = {
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
   * The class name to be applied on the component
   */
  className: PropTypes.string,
  /**
   * Classes automatically injected by material UI
   */
  classes: PropTypes.shape({}),
  /**
   * Callback to call when confirm action is clicked
   */
  onConfirm: PropTypes.func,
  /**
   * Callback to call when Resolve action is clicked
   */
  onResolve: PropTypes.func,

  /**
   * Text to show on the card header
   */
  cardHeader: PropTypes.string,

  /**
   * Confirmed text to show
   */
  confirmedText: PropTypes.string,

  /**
   * Possible text to show
   */
  possibleText: PropTypes.string,

  /**
   * Add more text to show
   */
  addMoreText: PropTypes.string,

  /**
   * Call back to call when confirmed diagnosis link is clicked
   */
  onConfirmedClick: PropTypes.func,

  /**
   * Call back to be call when add more is clicked
   */
  onAddMore: PropTypes.func,

  /**
   * Callback function to be called when the confirmed diagnosis is clicked
   */
  onDelete: PropTypes.func,
};

VcDiagnosisCard.defaultProps = {
  diagnoses: [],
  onConfirm: undefined,
  onResolve: undefined,
  classes: {},
  className: undefined,
  cardHeader: 'Diagnosis',
  confirmedText: 'Confirmed',
  possibleText: 'Possible',
  addMoreText: 'Add More',
  onAddMore: undefined,
  onConfirmedClick: undefined,
  onDelete: undefined,
};

export default withStyles(styles)(VcDiagnosisCard);

import React from 'react';
import Proptypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import VcGridRow from '../vcGrid/VcGridRow';
import VcGrid from '../vcGrid';
import VcButton from '../VcButton';

/**
 * A component to present some data with a label on top and buttons at the bottom
 * @param {*} props
 */
const styles = theme => ({
  flexrow: {
    display: 'flex',
    flex: '1',
    marginBottom: '5px',
    margin: '0px 3px 3px 3px',
  },
  bottomRow: {
    display: 'flex',
    flex: '1',
    marginBottom: '15px',
    margin: '0px 3px 3px 3px',
  },
  xButton: {
    color: theme.palette.primary.contrastText,
    fontSize: '18px',
    margin: '-16px -21px -20px 0px',
    float: 'right',
  },
  primaryBackground: {
    background: theme.palette.primary.main,
  },
  secondaryBackground: {
    background: theme.palette.secondary.main,
  },
  window: {
    minWidth: '600px',
    maxWidth: '700px',
    overflow: 'auto',
    borderRadius: '15px',
  },
  top: {
    color: theme.palette.primary.contrastText,
    fontWeight: '700',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '18px',
    overflow: 'hidden',
  },
  papers: {
    width: '100%',
    textAlign: 'center',
    background: theme.palette.primary.contrastText,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  referButton: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.secondary.main,
    fontSize: '14px',
    margin: '5px',
  },
  saveButton: {
    color: theme.palette.primary.main,
    fontSize: '14px',
    margin: '5px',
    border: '2px solid',
    padding: '4px 6px 4px 6px',
  },
  dischargeButton: {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    fontSize: '14px',
    margin: '5px',
  },
});

const VcCardexWindow = props => {
  const {
    classes,
    className,
    rows,
    title,
    onClose,
    buttons,
    secondaryBackground,
  } = props;
  return (
    <Paper
      className={cx(
        classes.window,
        className,
        secondaryBackground
          ? classes.secondaryBackground
          : classes.primaryBackground
      )}
    >
      <VcGrid>
        <VcGridRow
          className={cx(
            classes.top,
            secondaryBackground
              ? classes.secondaryBackground
              : classes.primaryBackground
          )}
        >
          <div>{title}</div>
          <Button className={cx(classes.xButton)} onClick={onClose}>
            <b>X</b>
          </Button>
        </VcGridRow>
        {rows.map((row, index) => {
          return (
            <VcGridRow key={index} className={cx(classes.flexrow)} flex={1}>
              <div className={cx(classes.papers)}>{row}</div>
            </VcGridRow>
          );
        })}
        <VcGridRow className={cx(classes.bottomRow)}>
          <div className={cx(classes.papers)}>
            {buttons
              ? buttons.map(button => (
                  <VcButton
                    className={
                      button.type === 'discharge'
                        ? classes.dischargeButton
                        : button.type === 'refer'
                        ? classes.referButton
                        : button.type === 'save' ||
                          button.type === 'returnToCardex'
                        ? classes.saveButton
                        : null
                    }
                    key={button.label}
                    onClick={button.callBack}
                    flex={4}
                    value={button.label}
                  />
                ))
              : null}
          </div>
        </VcGridRow>
      </VcGrid>
    </Paper>
  );
};

VcCardexWindow.propTypes = {
  /** text for the label */
  title: Proptypes.string,
  /** rows of children */
  rows: Proptypes.arrayOf(Proptypes.any),
  /** callback function for close */
  onClose: Proptypes.func,
  /** text for discharge buton */
  dischargeLabel: Proptypes.string,
  /** text for save buton */
  saveLabel: Proptypes.string,
  /** text for refer buton */
  referLabel: Proptypes.string,
  /** background color selection */
  secondaryBackground: Proptypes.bool,
};

VcCardexWindow.defaultProps = {
  dischargeLabel: 'DISCHARGE',
  saveLabel: 'SAVE',
  referLabel: 'REFER',
  title: 'Patient Notes',
  rows: [],
  secondaryBackground: false,
  onClose: () => console.log('onClose not provided'),
};

export default withStyles(styles)(VcCardexWindow);

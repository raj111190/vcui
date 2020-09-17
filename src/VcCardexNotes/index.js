import React from 'react';
import Proptypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from '@material-ui/core';
import VcGridColumn from '../vcGrid/VcGridColumn';
import VcGridRow from '../vcGrid/VcGridRow';
import VcGrid from '../vcGrid';

/**
 * A component to present some data in rows and an option to include child components to enter data
 * @param {*} props
 */
const styles = theme => ({
  title: {
    margin: '15px',
    fontWeight: 'bold',
  },
  flexrow: {
    display: 'flex',
    flex: '1',
    margin: '20px 10px 0px 5px',
    overflowX: 'hidden',
  },
  rowWithBorder: {
    display: 'flex',
    flex: '1',
    marginBottom: '5px',
    margin: '0px 10px 0px 10px',
    borderBottom: '1px solid',
    borderBottomColor: theme.palette.inherit,
    padding: '5px',
  },
  background: {
    background: theme.palette.primary.contrastText,
    overflow: 'auto',
    width: '100%',
  },
  papers: {
    width: '100%',
    textAlign: 'center',
    background: theme.palette.primary.contrastText,
    margin: '10px 10px 0px 10px',
  },
  doctorNotes: {
    color: theme.palette.doctorNotes,
  },
  notes: {
    maxHeight: '250px',
    overflowY: 'auto',
  },
  timeDisplay: {
    minWidth: '70px',
  },
});

const VcCardexNotes = props => {
  const { classes, className } = props;
  const data = props.values;
  return (
    <div className={cx(classes.background, className)}>
      <VcGrid>
        {props.label ? (
          <VcGridRow className={cx(classes.title)}>{props.label}</VcGridRow>
        ) : null}
        <div className={cx(classes.notes)}>
          {data.map(row => {
            return (
              <VcGridRow
                className={cx(
                  classes.rowWithBorder,
                  row.type === 'Doctor' ? classes.doctorNotes : null
                )}
                flex={1}
                key={row.notesValue}
              >
                <VcGridColumn>{row.timeDisplay}</VcGridColumn>
                <VcGridColumn flex={5}>{row.notesValue}</VcGridColumn>
              </VcGridRow>
            );
          })}
        </div>
        <VcGridRow className={cx(classes.flexrow)}>
          {props.editTabs.map((component, index) => {
            return (
              <VcGridColumn
                className={cx(classes.papers)}
                flex={props.editTabsSizes[props.editTabs.indexOf(component)]}
                key={index}
              >
                {component}
              </VcGridColumn>
            );
          })}
        </VcGridRow>
      </VcGrid>
    </div>
  );
};

VcCardexNotes.propTypes = {
  /** text for the label */
  label: Proptypes.string,
  /** values to be displayed in each row */
  values: Proptypes.arrayOf(Proptypes.shape({})),
  /** children/low level components used to enter data */
  editTabs: Proptypes.arrayOf(Proptypes.any),
  /** flex sizes of the low-level components */
  editTabsSizes: Proptypes.array,
};

VcCardexNotes.defaultProps = {
  values: [],
  editTabs: [],
  editTabsSizes: [],
};

export default withStyles(styles)(VcCardexNotes);

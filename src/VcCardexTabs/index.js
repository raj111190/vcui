import React from 'react';
import Proptypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import VcGridColumn from '../vcGrid/VcGridColumn';
import VcGridRow from '../vcGrid/VcGridRow';
import VcGrid from '../vcGrid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

/**
 * A component to present some data with a 3 different tabs
 * @param {*} props
 */
const styles = theme => ({
  flexrow: {
    display: 'flex',
    flex: '1',
    margin: '20px 10px 0px 5px',
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
  xButton: {
    fontSize: '14px',
    border: '3px solid',
    borderColor: theme.palette.primary.main,
    margin: '15px 5px 0px 5px',
    flex: '1 0 21%',
    borderRadius: '15px 15px 0px 0px',
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
  },
  activeTab: {
    color: theme.palette.primary.main,
    fontSize: '14px',
    border: '3px solid',
    borderColor: theme.palette.primary.main,
    margin: '15px 5px 0px 5px',
    flex: '1 0 21%',
    borderRadius: '15px 15px 0px 0px',
    borderBottomColor: theme.palette.primary.contrastText,
  },
  line: {
    marginTop: '-3px',
    width: '100%',
    border: 'none',
    background: theme.palette.primary.main,
  },
  background: {
    background: theme.palette.primary.contrastText,
    minWidth: '600px',
    overflow: 'auto',
  },
  top: {
    color: theme.palette.primary.main,
    fontWeight: '700',
    background: theme.palette.primary.contrastText,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    fontSize: '18px',
    overflow: 'hidden',
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
});

class VcCardexTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab:
        this.props.activeTab === 'All'
          ? 3
          : this.props.activeTab === 'Doctor'
          ? 2
          : 1,
    };
  }
  onToggle = n => {
    this.setState({
      activeTab: n,
    });
    this.props.onTabChange(n === 1 ? 'Nurse' : n === 2 ? 'Doctor' : 'All');
  };

  render() {
    const { classes, className } = this.props;
    const data = this.props.values ? this.props.values : [];
    return (
      <div className={cx(classes.background, className)}>
        <VcGrid>
          <VcGridRow className={cx(classes.top)}>
            <Button
              className={
                this.state.activeTab === 1
                  ? cx(classes.activeTab)
                  : cx(classes.xButton)
              }
              onClick={this.onToggle.bind(this, 1)}
            >
              <b>{this.props.tabLabels[0]}</b>
            </Button>
            <Button
              className={
                this.state.activeTab === 2
                  ? cx(classes.activeTab)
                  : cx(classes.xButton)
              }
              onClick={this.onToggle.bind(this, 2)}
            >
              <b>{this.props.tabLabels[1]}</b>
            </Button>
            <Button
              className={
                this.state.activeTab === 3
                  ? cx(classes.activeTab)
                  : cx(classes.xButton)
              }
              onClick={this.onToggle.bind(this, 3)}
            >
              <b>{this.props.tabLabels[2]}</b>
            </Button>
            <hr size="5" className={cx(classes.line)} />
          </VcGridRow>
          <div className={cx(classes.notes)}>
            {data.map(row => {
              return (row.type === 'Nurse' && this.state.activeTab === 1) ||
                (row.type === 'Doctor' && this.state.activeTab === 2) ||
                this.state.activeTab === 3 ? (
                <VcGridRow
                  className={cx(
                    classes.rowWithBorder,
                    row.type === 'Doctor' ? classes.doctorNotes : null
                  )}
                  flex={1}
                  key={row.notesValues}
                >
                  <VcGridColumn>{row.timeDisplay}</VcGridColumn>
                  <VcGridColumn flex={5}>{row.notesValue}</VcGridColumn>
                  {row.hasEdit && this.state.activeTab !== 3 ? (
                    <div onClick={this.props.onEditRow.bind(this, row)}>
                      <Typography>
                        <Link className={classes.link}>
                          {this.props.editButtonLabel}
                        </Link>
                      </Typography>
                    </div>
                  ) : null}
                </VcGridRow>
              ) : null;
            })}
          </div>
          {this.state.activeTab < 3 ? (
            <VcGridRow className={cx(classes.flexrow)}>
              {this.props.editTabs
                ? this.props.editTabs.map((component, index) => {
                    return (
                      <VcGridColumn
                        className={cx(classes.papers)}
                        flex={
                          this.props.editTabsSizes[
                            this.props.editTabs.indexOf(component)
                          ]
                        }
                        key={index}
                      >
                        {component}
                      </VcGridColumn>
                    );
                  })
                : null}
            </VcGridRow>
          ) : null}
        </VcGrid>
      </div>
    );
  }
}

VcCardexTabs.propTypes = {
  /** text for the label */
  title: Proptypes.string,
  /** values to be displayed in each row */
  values: Proptypes.arrayOf(Proptypes.shape({})),
  /** flex sizes for each tab */
  editTabsSizes: Proptypes.arrayOf(Proptypes.number),
  /** call back function when active tabs is changed */
  onTabChange: Proptypes.func.isRequired,
  /** Label for the Edit button */
  editButtonLabel: Proptypes.string,
  /** Callback function for editing a row */
  onEditRow: Proptypes.func,
  /** Labels for each tab */
  tabLabels: Proptypes.arrayOf(Proptypes.string),
  /** Default active tab */
  activeTab: Proptypes.string,
};

VcCardexTabs.defaultProps = {
  buttonLabel: 'ADD',
  values: [],
  title: 'Patient Notes',
  editTabsSizes: [1, 1, 1],
  editButtonLabel: 'EDIT',
  tabLabels: ['NURSE', 'DOCTOR', 'ALL'],
  onEditRow: () => console.log('Editrow callback not defined'),
  activeTab: 'All',
};

export default withStyles(styles)(VcCardexTabs);

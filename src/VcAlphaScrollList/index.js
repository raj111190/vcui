import React from 'react';
import Proptypes from 'prop-types';
import cx from 'classnames';
import { withStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CheckSquareIcon from '../VcIcons/CheckSquareIcon';
import PlusBoxIcon from '../VcIcons/PlusBoxIcon';
import VcGridColumn from '../vcGrid/VcGridColumn';
import VcGridRow from '../vcGrid/VcGridRow';
import VcGrid from '../vcGrid';

/**
 * A component to present some data with a label on top
 * @param {*} props
 */
const styles = theme => ({
  root: {
    width: '100%',
  },
  flexrow: {
    display: 'flex',
    flex: '1',
    height: '500px',
  },
  stick: {
    alignItems: 'center',
    color: theme.palette.primary.main,
    float: 'left',
  },
  right: {
    margin: '0px',
    width: '90%',
    overflow: 'auto',
    float: 'right',
    flex: '9',
    height: 'inherit',
  },
  xButton: {
    color: theme.palette.primary.contrastText,
    fontSize: '18px',
    margin: '-16px -21px -20px 0px',
    float: 'right',
  },
  closeButton: {
    color: theme.palette.primary.contrastText,
    fontSize: '18px',
    margin: '-10px 0px -15px 0px',
  },
  fillBackground: {
    backgroundImage:
      'radial-gradient(' +
      theme.palette.secondary.main +
      ' 42%, ' +
      theme.palette.primary.contrastText +
      ' 0%)',
  },
  noBackground: {
    backgroundImage:
      'radial-gradient(' +
      theme.palette.primary.contrastText +
      ',' +
      theme.palette.primary.contrastText +
      ')',
  },
  background: {
    minWidth: '300px',
    height: '619px',
    overflow: 'auto',
  },
  cont: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  vl: {
    borderLeft: '2px solid',
    borderColor: theme.palette.primary.main,
    float: 'left',
  },
  vlright: {
    borderLeft: '5px solid',
    borderColor: theme.palette.primary.main,
    float: 'right',
  },
  top: {
    color: theme.palette.primary.contrastText,
    fontWeight: '700',
    background: theme.palette.primary.main,
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '18px',
    overflow: 'hidden',
  },
  bottom: {
    color: theme.palette.primary.contrastText,
    fontWeight: '700',
    background: theme.palette.primary.main,
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  checkSquare: {
    color: theme.palette.inherit,
    fontSize: '41px',
  },
  plusBox: {
    color: theme.palette.primary.main,
    fontSize: '41px',
  },
});

class VcAlphaScrollList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 'A',
      scroll: false,
    };
  }
  scrollIntoView = () => {
    if (this.state.scroll) {
      let element = document.getElementById(this.state.index);
      let next = 1;
      let alphabet = this.state.index;
      while (!element) {
        if (alphabet === 'Z') {
          next = -1;
          alphabet = this.state.index;
        }
        let asciiValue = alphabet.charCodeAt(0) + next;
        alphabet = String.fromCharCode(asciiValue);
        element = document.getElementById(alphabet);
        if (alphabet === 'A') return;
      }
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
      this.setState({
        scroll: false,
      });
    }
  };
  componentDidUpdate() {
    this.scrollIntoView();
  }
  handleShow = i => {
    this.setState({ index: i, scroll: true });
  };

  render() {
    const alpha = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];
    const { classes, className } = this.props;
    return (
      <Paper className={cx(classes.background, className)}>
        <VcGrid>
          <VcGridRow className={cx(classes.top)}>
            <div>{this.props.title}</div>
            <Button
              className={cx(classes.xButton)}
              onClick={this.props.onToggle}
            >
              <b>X</b>
            </Button>
          </VcGridRow>
          <VcGridRow className={cx(classes.flexrow)} flex={1}>
            <div className={cx(classes.vl)}></div>
            <VcGridColumn className={classes.stick}>
              {alpha.map(value => {
                return (
                  <div key={value} onClick={this.handleShow.bind(this, value)}>
                    {value}
                  </div>
                );
              })}
            </VcGridColumn>
            <div className={cx(classes.vl)}></div>
            <VcGridColumn className={classes.right} flex={9}>
              <List className={classes.root}>
                {this.props.options
                  ? this.props.options.map(option => {
                      return (
                        <ListItem
                          id={option.display.substring(0, 1)}
                          key={option.display}
                          onClick={this.props.toggleSelected.bind(this, option)}
                          dense
                          button
                        >
                          <ListItemText primary={option.display} />
                          <ListItemSecondaryAction
                            onClick={this.props.toggleSelected.bind(
                              this,
                              option
                            )}
                          >
                            <div
                              className={
                                this.props.highlighted.find(
                                  pos =>
                                    pos.display.toLowerCase() ===
                                    option.display.toLowerCase()
                                )
                                  ? classes.fillBackground
                                  : classes.noBackground
                              }
                            >
                              {this.props.selectedOptions.find(
                                confirm =>
                                  confirm.display.toLowerCase() ===
                                  option.display.toLowerCase()
                              ) ? (
                                <CheckSquareIcon
                                  className={classes.checkSquare}
                                />
                              ) : (
                                <PlusBoxIcon className={classes.plusBox} />
                              )}
                            </div>
                          </ListItemSecondaryAction>
                        </ListItem>
                      );
                    })
                  : null}
              </List>
            </VcGridColumn>
            <div className={classes.vlright}></div>
          </VcGridRow>
          <VcGridRow className={classes.bottom}>
            <Button
              className={classes.closeButton}
              onClick={this.props.onToggle}
            >
              {this.props.buttonLabel}
            </Button>
          </VcGridRow>
        </VcGrid>
      </Paper>
    );
  }
}

VcAlphaScrollList.propTypes = {
  /** The class name to apply to the component */
  className: Proptypes.string,
  /** text for the label */
  title: Proptypes.string,
  /** list of all the options available */
  options: Proptypes.arrayOf(Proptypes.object).isRequired,
  /** options that are highlighted */
  highlighted: Proptypes.arrayOf(Proptypes.object),
  /** options that are selected */
  selectedOptions: Proptypes.arrayOf(Proptypes.object),
  /** onChange function */
  toggleSelected: Proptypes.func.isRequired,
  /** callback function for submit/close */
  onToggle: Proptypes.func.isRequired,
  /** text for submit buton */
  buttonLabel: Proptypes.string,
};

VcAlphaScrollList.defaultProps = {
  title: 'Alphabet Scroll List',
  buttonLabel: 'CLOSE',
  className: undefined,
};

export default withStyles(styles)(VcAlphaScrollList);

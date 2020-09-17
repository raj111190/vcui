import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import { Manager, Reference, Popper } from 'react-popper';
import Search from '@material-ui/icons/Search';
import Clear from '@material-ui/icons/Clear';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  button: {
    minHeight: '40px',
  },
  label: {
    fontWeight: 'bold',
  },
  avatar: {
    backgroundColor: 'inherit',
  },
  container: {
    width: '100%',
    paddingLeft: '4px',
    paddingRight: '4px',
    direction: 'ltr',
    display: 'flex',
  },
  icon: {
    color: theme.palette.inherit,
    alignSelf: 'center',
    marginLeft: 'auto',
  },
  paper: {
    borderRadius: '0px',
    display: 'flex',
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'flex-start',
    minWidth: '100%',
    minWidth: 'fill-available',
  },
  searchIcon: {
    color: theme.palette.inherit,
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: '20px',
  },
});

/**
 * Button component to be used for all standard buttons
 * @param {*} props
 */
class VcSearchButton extends React.Component {
  constructor(props) {
    super(props);
    const shouldDisplay = props.value ? props.value.length !== 0 : false;
    this.state = {
      open: shouldDisplay,
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  // Change state to the opposite of what it was before
  handleClick = () => {
    this.setState(previousState => ({ open: !previousState.open }));
  };

  handleClose = () => {
    // setTimeout to ensure a close event comes after a target click event
    this.timeout = setTimeout(() => {
      this.setState({ open: false });
    });
    this.props.onClose();
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.props.onEnter(this.props.value);
    }
  };

  render() {
    const { open } = this.state;

    return (
      <Manager>
        {open ? (
          <Popper eventsEnabled={open}>
            {({ ref, style, placement, arrowProps }) => (
              <Grow
                style={{ transformOrigin: '0 0 0' }}
                timeout={300}
                in={open}
              >
                <Paper className={this.props.classes.paper} elevation={0}>
                  <div className={this.props.classes.container}>
                    <Search className={this.props.classes.searchIcon} />
                    <Input
                      fullWidth
                      disableUnderline
                      value={this.props.value}
                      placeholder={this.props.searchPlaceholder}
                      onChange={this.props.onSearchChange}
                      onKeyPress={this.handleKeyPress}
                    />
                    <Clear
                      onClick={this.handleClose}
                      className={this.props.classes.icon}
                    />
                  </div>
                </Paper>
              </Grow>
            )}
          </Popper>
        ) : null}
        <Reference>
          {({ ref }) => (
            <div ref={ref}>
              <Avatar
                onClick={this.handleClick}
                className={this.props.classes.avatar}
              >
                <Search />
              </Avatar>
            </div>
          )}
        </Reference>
      </Manager>
    );
  }
}

VcSearchButton.propTypes = {
  /** value of the search textfield */
  value: PropTypes.string,
  /** callback called when search text changes */
  onSearchChange: PropTypes.func,
  /** Callback called when close key (X) is pressed */
  onClose: PropTypes.func,
  /** callback called when enter key is pressed */
  onEnter: PropTypes.func,
  /** The placeholder text shown when the search bar appears */
  searchPlaceholder: PropTypes.string,
};

VcSearchButton.defaultProps = {
  value: '',
  onSearchChange: () => {},
  onClose: () => {},
  onEnter: () => {},
  searchPlaceholder: '',
};

export default withStyles(styles)(VcSearchButton);

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import PropTypes from 'prop-types';
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import amber from '@material-ui/core/colors/amber';
import classNames from 'classnames';
import green from '@material-ui/core/colors/green';
import { withStyles } from '@material-ui/core/styles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const styles = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

function VcNotificationContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="snackbar"
      message={
        <span className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={
        onClose
          ? [
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={onClose}
              >
                <CloseIcon className={classes.icon} />
              </IconButton>,
            ]
          : null
      }
      {...other}
    />
  );
}

VcNotificationContent.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  message: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

VcNotificationContent.defaultProps = {
  className: '',
  onClose: undefined,
};

const VcNotificationContentWrapper = withStyles(styles)(VcNotificationContent);

/**
 * Component that displays a notification message.
 * The message can be of type success, warning, error, or info
 * @param props see VcNotification.propTypes
 * @returns {*} The component
 * @constructor
 */
const VcNotification = props => {
  const {
    open,
    position,
    variant,
    message,
    autoHideDuration,
    onClose,
    ...other
  } = props;
  return (
    <Snackbar
      anchorOrigin={position}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <VcNotificationContentWrapper
        onClose={onClose}
        variant={variant}
        message={message}
        {...other}
      />
    </Snackbar>
  );
};

VcNotification.propTypes = {
  /** Message to display */
  message: PropTypes.node,
  /** Determines if the message is shown or not */
  open: PropTypes.bool,
  /** Function to handle closing when the message is dismissed */
  onClose: PropTypes.func,
  /** Number of ms after which the message will disappear. Requires onClose to be defined */
  autoHideDuration: PropTypes.number,
  /** Type of message to display */
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  /** Where to position the message */
  position: PropTypes.shape({
    vertical: PropTypes.oneOf(['top', 'bottom']),
    horizontal: PropTypes.oneOf(['left', 'right', 'center']),
  }),
};

VcNotification.defaultProps = {
  open: false,
  autoHideDuration: 6000,
  onClose: undefined,
  position: { vertical: 'top', horizontal: 'right' },
  message: '',
  variant: 'info',
};

export default VcNotification;

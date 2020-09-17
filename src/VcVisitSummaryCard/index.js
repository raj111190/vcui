import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Divider, Grid, List, ListItem, withStyles } from '@material-ui/core';
import RootRef from '@material-ui/core/RootRef';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import VcButton from '../VcButton';

const styles = theme => ({
  root: {},
  cardHeader: {
    width: '100%',
    height: '36px',
    boxSizing: 'border-box',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '0px',
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    boxShadow: 'none',
  },
  cardHeaderText: {
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: '16px',
    color: theme.palette.secondary.contrastText,
    textAlign: 'left',
    lineHeight: 2,
    paddingLeft: theme.spacing.unit,
  },
  actions: {
    padding: theme.spacing.unit,
  },
  content: {},
  summary: {
    padding: theme.spacing.unit,
  },
  divider: {
    marginLeft: '48px',
  },
  timeline: {
    minHeight: '60px',
    maxHeight: '257px',
    overflow: 'auto',
    paddingTop: 0,
  },
  timelineItem: {
    paddingTop: '0px',
  },
  timelineText: {
    padding: 0,
    color: theme.palette.inherit,
    textAlign: 'left',
  },
});

/**
 * Displays the visit summary (a timeline of events) in a card
 * @param props component properties
 * @returns {*}
 * @constructor
 */
class VcVisitSummaryCard extends React.Component {
  constructor(props) {
    super(props);
    this.timelineList = React.createRef();
  }

  scrollToBottom = () => {
    if (this.timelineList && this.timelineList.current) {
      const scrollHeight = this.timelineList.current.scrollHeight;
      this.timelineList.current.scrollTop = scrollHeight;
    }
  };

  renderTimelineEvent = timelineEvent => {
    return (
      <React.Fragment key={timelineEvent.message}>
        <ListItem className={this.props.classes.timelineItem}>
          <Grid container justify="flex-start">
            <Grid item xs={4}>
              <Typography className={this.props.classes.timelineText}>
                {timelineEvent.timeStamp}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography className={this.props.classes.timelineText}>
                {timelineEvent.message}
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
        <Divider component="li" className={this.props.classes.divider} />
      </React.Fragment>
    );
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <Paper
        className={cx(this.props.classes.root, this.props.className)}
        square
      >
        <div className={this.props.classes.cardHeader}>
          <Typography
            variant="subtitle1"
            className={this.props.classes.cardHeaderText}
          >
            {this.props.cardHeader}
          </Typography>
        </div>
        <Grid container className={this.props.classes.content}>
          <Grid container className={this.props.classes.summary}>
            <Grid item xs={12}>
              <RootRef rootRef={this.timelineList}>
                <List
                  className={cx(
                    this.props.classes.timeline,
                    this.props.className
                  )}
                >
                  {this.props.timeline.map(this.renderTimelineEvent)}
                </List>
              </RootRef>
            </Grid>
          </Grid>
        </Grid>
        {this.props.onEndVisit !== undefined ? (
          <Grid
            container
            justify="flex-end"
            className={this.props.classes.actions}
          >
            <VcButton
              value={this.props.endVisitText}
              color="primary"
              squared
              size="small"
              onClick={this.props.onEndVisit}
            />
          </Grid>
        ) : (
          <div />
        )}
      </Paper>
    );
  }
}

VcVisitSummaryCard.propTypes = {
  /**
   * Timeline list to display
   */
  timeline: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
      timeStamp: PropTypes.string,
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
   * Text to show on the card header
   */
  cardHeader: PropTypes.string,

  /**
   * Add more text to show
   */

  endVisitText: PropTypes.string,

  /**
   * Callback function that ends the visit when end visit is clicked
   */
  onEndVisit: PropTypes.func,
};

VcVisitSummaryCard.defaultProps = {
  timeline: [],
  classes: {},
  className: undefined,
  cardHeader: 'Visit Summary',
  endVisitText: 'End Visit',
  onEndVisit: undefined,
};

export default withStyles(styles)(VcVisitSummaryCard);

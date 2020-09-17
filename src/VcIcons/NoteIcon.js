import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import PropTypes from 'prop-types';

const NoteIcon = props => {
  const { className } = props;
  return (
    <SvgIcon className={className}>
      <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
    </SvgIcon>
  );
};

NoteIcon.propTypes = {
  /** The class name to apply to the component */
  className: PropTypes.string,
};

NoteIcon.defaultProps = {
  className: undefined,
};

export default NoteIcon;

import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const BlankIcon = props => {
  const { width, height } = props;
  return (
    <SvgIcon viewBox={`0 0 ${width} ${height}`}>
      <line width="0" height="0" />
    </SvgIcon>
  );
};

BlankIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

BlankIcon.defaultProps = {
  width: 24,
  height: 24,
};

export default BlankIcon;

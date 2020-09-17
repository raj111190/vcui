import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const DotIcon = props => {
  const { width, height, r, className } = props;
  return (
    <SvgIcon viewBox={`0 0 ${width} ${height}`} className={className}>
      <circle cx={width / 2} cy={height / 2} r={width * r} />
    </SvgIcon>
  );
};

DotIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  r: PropTypes.number,
  className: PropTypes.string,
};

DotIcon.defaultProps = {
  width: 24,
  height: 24,
  r: 0.25,
  className: undefined,
};

export default DotIcon;

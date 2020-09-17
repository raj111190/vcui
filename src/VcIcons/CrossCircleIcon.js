import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

const CrossCircleIcon = props => {
  const { className } = props;
  return (
    <SvgIcon className={className} viewBox="0 0 96 96">
      <path
        fillOpacity="0.1"
        d="M48,4C23.7,4,4,23.699,4,48s19.7,44,44,44s44-19.699,44-44S72.3,4,48,4z M48,84c-19.882,0-36-16.118-36-36s16.118-36,36-36  s36,16.118,36,36S67.882,84,48,84z"
      />
      <path d="M53.657,48l8.485-8.485c1.562-1.562,1.562-4.095,0-5.656c-1.562-1.562-4.096-1.562-5.658,0L48,42.343l-8.485-8.484  c-1.562-1.562-4.095-1.562-5.657,0c-1.562,1.562-1.562,4.096,0,5.656L42.343,48l-8.485,8.485c-1.562,1.562-1.562,4.095,0,5.656  c1.562,1.562,4.095,1.562,5.657,0L48,53.657l8.484,8.484c1.562,1.562,4.096,1.562,5.658,0c1.562-1.562,1.562-4.096,0-5.656  L53.657,48z" />
    </SvgIcon>
  );
};

CrossCircleIcon.propTypes = {
  /** The class name to apply to the component */
  className: PropTypes.string,
};

CrossCircleIcon.defaultProps = {
  className: undefined,
};

export default CrossCircleIcon;

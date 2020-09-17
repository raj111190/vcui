import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import PropTypes from 'prop-types';

const PlusCircleIcon = props => {
  const { className } = props;
  return (
    <SvgIcon className={className} viewBox="0 0 96 96">
      <path
        fillOpacity="0.1"
        d="M48,4C23.7,4,4,23.699,4,48s19.7,44,44,44s44-19.699,44-44S72.3,4,48,4z M48,84c-19.882,0-36-16.118-36-36s16.118-36,36-36  s36,16.118,36,36S67.882,84,48,84z"
      />
      <path d="M64,44H52V32c0-2.209-1.791-4-4-4s-4,1.791-4,4v12H32c-2.209,0-4,1.791-4,4s1.791,4,4,4h12v12c0,2.209,1.791,4,4,4  s4-1.791,4-4V52h12c2.209,0,4-1.791,4-4S66.209,44,64,44z" />
    </SvgIcon>
  );
};

PlusCircleIcon.propTypes = {
  /** The class name to apply to the component */
  className: PropTypes.string,
};

PlusCircleIcon.defaultProps = {
  className: undefined,
};

export default PlusCircleIcon;

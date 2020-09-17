import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const PlusBoxIcon = props => {
  const { className } = props;
  return (
    <SvgIcon className={className} viewBox="0 0 24 24">
      <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
      <path d="M0 0h24v24H0z" fill="none"></path>
    </SvgIcon>
  );
};

export default PlusBoxIcon;

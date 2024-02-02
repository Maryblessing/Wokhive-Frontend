import React from 'react';
import { NextPage } from 'next';

const AlertCircle: NextPage<{
  className?: string;
}> = ({ className, ...props }) => (
  <svg
    className={className}
    fill='none'
    height='16'
    viewBox='0 0 16 16'
    width='16'
    xmlns='http://www.w3.org/2000/svg'
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    <g id='alert-circle'>
      <path
        d='M7.99967 5.33301V7.99967M7.99967 10.6663H8.00634M14.6663 7.99967C14.6663 11.6816 11.6816 14.6663 7.99967 14.6663C4.31778 14.6663 1.33301 11.6816 1.33301 7.99967C1.33301 4.31778 4.31778 1.33301 7.99967 1.33301C11.6816 1.33301 14.6663 4.31778 14.6663 7.99967Z'
        id='Icon'
        stroke='#F04438'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.33333'
      />
    </g>
  </svg>
);

export default AlertCircle;

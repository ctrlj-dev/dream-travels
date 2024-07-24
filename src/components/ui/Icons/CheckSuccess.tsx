import React, { FC, SVGProps } from 'react';

const CheckSuccess: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="12" cy="12" r="9.00375" fill="#67D071" stroke="#67D071" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.44252 12.3392L10.6104 14.5071L10.5964 14.4931L15.4875 9.60205" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

);

export default CheckSuccess;

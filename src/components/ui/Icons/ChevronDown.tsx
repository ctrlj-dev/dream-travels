import React, { FC, SVGProps } from 'react';

const ChevronDown: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M6 9L12 15L18 9" stroke="#121212" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

);

export default ChevronDown;

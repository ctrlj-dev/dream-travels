'use client';

import { FC } from 'react';
import LinkButtonRoot, { LinkButtonRootProps } from './LinkButton.styles';


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: LinkButtonRootProps['$variant'];
    sx?: React.CSSProperties;
};

const LinkButton: FC<ButtonProps> = ({ variant, children, sx, ...props }) => {
    return (
        <LinkButtonRoot $variant={variant} $sx={{ ...sx }} {...props}>
            {children}
        </LinkButtonRoot>
    );
};

export default LinkButton;

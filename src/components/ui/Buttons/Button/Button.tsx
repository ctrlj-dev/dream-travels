'use client';

import { FC } from 'react';
import ButtonRoot, { ButtonRootProps } from './Button.styles';


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: ButtonRootProps['$variant'];
    size: ButtonRootProps['$size'];
    sx?: React.CSSProperties;
};

const Button: FC<ButtonProps> = ({ variant, size, children, sx, ...props }) => {
    return (
        <ButtonRoot $variant={variant} $size={size} $sx={{ ...sx }} {...props}>
            {children}
        </ButtonRoot>
    );
};

export default Button;

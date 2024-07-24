'use client'

import { FC, InputHTMLAttributes, forwardRef } from 'react';
import { InputRoot } from './Input.styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({ children, ...props }, ref) => {
    return <InputRoot ref={ref} {...props} >{children}</InputRoot>;
});

Input.displayName = 'Input';

export default Input;

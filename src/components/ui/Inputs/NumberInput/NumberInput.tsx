'use client'

import React, { FC, InputHTMLAttributes, forwardRef } from 'react';
import { ChevronDown } from '../../Icons';
import { IconWrapper, InputContainer, InputElement } from './NumberInput.styles';


type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    onIconClick: () => void;
};

const NumberInput: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({ onIconClick, ...props }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
            e.preventDefault();
        }
    };

    return (
        <InputContainer>
            <InputElement
                ref={ref}
                {...props}
                onKeyDown={handleKeyDown}
                inputMode="numeric"
            />
            <IconWrapper className='down' onClick={onIconClick}>
                <ChevronDown />
            </IconWrapper>
        </InputContainer>
    );
});

NumberInput.displayName = 'NumberInput';

export default NumberInput;

'use client'

import { FC, TextareaHTMLAttributes, forwardRef } from 'react';
import { TextareaRoot } from './Textarea.styles';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    height: string;
};

const Textarea: FC<TextareaProps> = forwardRef<HTMLTextAreaElement, TextareaProps>(({ height, ...props }, ref) => {
    return <TextareaRoot $height={height} ref={ref} {...props} />;
});

Textarea.displayName = 'Textarea';

export default Textarea;

import { FC, PropsWithChildren } from 'react';
import TypographyRoot from './Typography.styles';
import { variant } from './typography.utils';

type TypographyProps = {
    variant: variant;
    className?: string
    componentVariant?: keyof JSX.IntrinsicElements;
    sx?: React.CSSProperties;
}

const Typography: FC<PropsWithChildren<TypographyProps>> = ({ variant, componentVariant = 'p', className, sx, children }) => {
    return (
        <TypographyRoot {...className && { className: className }} as={componentVariant} $variant={variant} $sx={{ ...sx }}>
            {children}
        </TypographyRoot >
    )
}

export default Typography
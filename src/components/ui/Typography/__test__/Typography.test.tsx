import { render, screen } from '@testing-library/react';
import Typography from '../Typography';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/lib/theme';
import { variant } from '../typography.utils';

const renderTypography = (variant: variant, componentVariant: keyof JSX.IntrinsicElements = 'p', className: string = '', sx: React.CSSProperties = {}) => {
    render(
        <ThemeProvider theme={theme}>
            <Typography variant={variant} componentVariant={componentVariant} className={className} sx={sx}>
                Test Content
            </Typography>
        </ThemeProvider>
    );
};

describe('Typography component', () => {
    it('should render with the correct variant', () => {
        renderTypography('h1');
        const element = screen.getByText('Test Content');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toBe('P');
    });

    it('should render with a custom component', () => {
        renderTypography('h1', 'h1');
        const element = screen.getByText('Test Content');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toBe('H1');
    });

    it('should apply the className', () => {
        const customClass = 'custom-class';
        renderTypography('h1', 'p', customClass);
        const element = screen.getByText('Test Content');
        expect(element).toHaveClass(customClass);
    });

    it('should apply the sx styles', () => {
        const customStyle: React.CSSProperties = { color: 'red', fontSize: '20px' };
        renderTypography('h1', 'p', '', customStyle);
        const element = screen.getByText('Test Content');
        expect(element).toHaveStyle(customStyle);
    });
});

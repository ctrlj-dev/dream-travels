import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/lib/theme';

describe('Card component', () => {
    const cardProps = {
        title: 'Sample Title',
        desc: 'Sample description for testing purposes.',
        image: '/sample-image.jpg',
        alt: 'Sample image',
    };

    it('should render the title, description, and image', () => {
        render(
            <ThemeProvider theme={theme}>
                <Card {...cardProps} />
            </ThemeProvider>
        );

        expect(screen.getByRole('heading', { name: cardProps.title })).toBeInTheDocument();
        expect(screen.getByText(cardProps.desc)).toBeInTheDocument();
        expect(screen.getByAltText(cardProps.alt)).toBeInTheDocument();
    });

    it('should truncate the description if truncate is true', () => {
        render(
            <ThemeProvider theme={theme}>
                <Card {...cardProps} truncate={true} />
            </ThemeProvider>
        );

        const truncatedDesc = cardProps.desc.slice(0, 150);
        expect(screen.getByText(truncatedDesc)).toBeInTheDocument();
    });

    it('should not truncate the description if truncate is false', () => {
        render(
            <ThemeProvider theme={theme}>
                <Card {...cardProps} truncate={false} />
            </ThemeProvider>
        );

        expect(screen.getByText(cardProps.desc)).toBeInTheDocument();
    });

    it('should render children elements', () => {
        render(
            <ThemeProvider theme={theme}>
                <Card {...cardProps}>
                    <button>Click me</button>
                </Card>
            </ThemeProvider>
        );

        expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });
});

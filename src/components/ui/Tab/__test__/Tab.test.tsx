import { render, screen, fireEvent } from '@testing-library/react';
import Tab from '../Tab';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/lib/theme';

const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);

describe('Tab component', () => {
    it('should render the tab and handle click events', () => {
        const onClickMock = jest.fn();

        render(
            <ThemeWrapper>
                <Tab active={false} onClick={onClickMock}>
                    Tab Content
                </Tab>
            </ThemeWrapper>
        );

        const tabElement = screen.getByText('Tab Content');
        expect(tabElement).toBeInTheDocument();

        fireEvent.click(tabElement);
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should apply the active style when the tab is active', () => {
        render(
            <ThemeWrapper>
                <Tab active={true}>
                    Active Tab Content
                </Tab>
            </ThemeWrapper>
        );

        const tabElement = screen.getByText('Active Tab Content');
        expect(tabElement).toHaveStyle(`background-color: ${theme.colors.secondary.light}`);
    });
});

import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { Navbar } from '@/components/ui/Navbar';
import GlobalStyles from '../lib/theme/GlobalStyles';
import Providers from '../lib/theme/StyleProviders';

// Similar font to Oakes Grotesk
const nunito = Nunito({
    subsets: ['latin'],
    display: 'swap',
})
export const metadata: Metadata = {
    title: 'Dream Travels',
    description: 'Find the best travel',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={nunito.className}>
                <Providers>
                    <GlobalStyles />
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}

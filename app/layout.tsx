import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Cainam Trading',
    description: 'AI-powered trading platform',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="dark" data-oid="fyq.c:z">
            <body className={`${inter.className} bg-background text-foreground`} data-oid="l-a:7yu">
                {children}
            </body>
        </html>
    );
}

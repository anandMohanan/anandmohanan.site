import './globals.css'
import { Gideon_Roman as Times_New_Roman } from 'next/font/google'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { NavLink } from '@/components/nav-link'
import { ThemeSwitcher } from '@/components/theme-switcher'

const timesNewRoman = Times_New_Roman({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Anand Mohanan - Portfolio',
    description: 'Web dev, Tinkering with Linux, automating tasks, and refining my workflow',
    keywords: 'Anand Mohanan, portfolio, web development, Linux, AI agents, OCaml, Zig',
    icons: {
        icon: [
            {
                url: '/icon',
                type: 'image/svg+xml',
            }
        ]
    },
    openGraph: {
        title: 'Anand Mohanan - Portfolio',
        description: 'Tinkering with Linux, automating tasks, and refining my workflow',
        url: 'https://www.anandmohanan.site',
        siteName: 'Anand Mohanan Portfolio',
        images: [
            {
                url: '/opengraph-image.png',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en-US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Anand Mohanan - Portfolio',
        description: 'Web dev, Tinkering with Linux, automating tasks, and refining my workflow',
        images: ['https://anandmohanan.site/opengraph-img.png'],
        creator: '@anandmohanan',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${timesNewRoman.className} bg-white dark:bg-black text-black dark:text-white min-h-screen flex flex-col`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <div className="container mx-auto px-4 py-8 flex-1 flex flex-col">
                        <header className="mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex-1" />
                                <nav className="flex justify-center space-x-4 flex-1">
                                    <NavLink href="/">Home</NavLink>
                                    <NavLink href="/about">About</NavLink>
                                    <NavLink href="/tools">Tools</NavLink>
                                </nav>
                                <div className="flex-1 flex justify-end">
                                    <ThemeSwitcher />
                                </div>
                            </div>
                        </header>
                        <main className="flex-1">{children}</main>
                        <footer className="mt-8 text-center text-sm py-4">
                            <p>© {new Date().getFullYear()} Anand Mohanan.</p>
                        </footer>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}

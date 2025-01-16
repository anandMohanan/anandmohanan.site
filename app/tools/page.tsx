import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Tools - Anand Mohanan',
    description: 'Discover the tools and technologies I use for development, including Linux, Neovim, databases, and deployment platforms.',
    keywords: 'Arch Linux, Neovim, PostHog, Vercel, Cloudflare, Neon, Xata, Turso, Development Tools',
    openGraph: {
        title: 'Tools - Anand Mohanan',
        description: 'Discover my development toolkit and preferred technologies.',
        type: 'website',
        url: 'https://www.anandmohanan.site/tools',
    },
}


export default function Tools() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Tools</h1>

            <section>
                <h2 className="text-2xl font-bold mb-4">Operating System</h2>
                <ul className="list-disc pl-5">
                    <li>Arch linux with wayland.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Code Editor</h2>
                <ul className="list-disc pl-5">
                    <li>Neovim and some plugins.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Analytics</h2>
                <ul className="list-disc pl-5">
                    <li>posthog, better stack, langfuse.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">File Uploading</h2>
                <ul className="list-disc pl-5">
                    <li>Uploadthing.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Deployment</h2>
                <ul className="list-disc pl-5">
                    <li>Vercel</li>
                    <li>Cloudflare</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Database</h2>
                <ul className="list-disc pl-5">
                    <li>Neon (Postgres)</li>
                    <li>Xata (Postgres)</li>
                    <li>Turso (sqlite)</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Domains</h2>
                <ul className="list-disc pl-5">
                    <li>Hostinger</li>
                </ul>
            </section>
        </div>
    )
}



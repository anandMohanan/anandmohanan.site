import React from 'react';

export const ProjectSection = () => {
    return (
        <section>
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="space-y-6">
                <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                    <a href='https://staybase.tech' className="text-xl font-semibold mb-2">Staybase</a>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                        AI-powered customer retention platform for e-commerce. Monitor. Analyze. Improve. Execute.
                    </p>
                    <div className="space-y-2">
                        <h4 className="font-medium">Tech Stack:</h4>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                            <li>• Nextjs (Backend Framework)</li>
                            <li>• Tailwindcss (CSS Framework)</li>
                            <li>• Posthog (Analytics)</li>
                            <li>• Supabase (Postgres)</li>
                            <li>• Drizzle Orm (Database Orm)</li>
                            <li>• Vercel Blob (Image Storage)</li>
                            <li>• Upstash Redis (Caching)</li>
                            <li>• OpenAI, Langchain, Langfuse (AI)</li>
                            <li>• Shopify Integration (E-commerce)</li>
                        </ul>
                    </div>
                </div>

                <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                    <a href="https://vautomate.ai" className="text-xl font-semibold mb-2">VAutomate</a>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                        Your Gateway to Intelligent API Agents. (in progress)
                    </p>
                </div>

                <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                    <a href='https://voicefirstai.com' className="text-xl font-semibold mb-2">VoiceFirstAI</a>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Meet your AI Agents that listen and speak.
                    </p>
                    <div className="space-y-2">
                        <h4 className="font-medium">Tech Stack:</h4>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                            <li>• Nextjs (Backend Framework)</li>
                            <li>• Tailwindcss (CSS Framework)</li>
                            <li>• Server Actions (Backend Layer)</li>
                            <li>• Posthog (Analytics)</li>
                            <li>• Neon (Serverless Postgres)</li>
                            <li>• Drizzle Orm (Database Orm)</li>
                            <li>• Vercel Blob (Image Storage)</li>
                            <li>• Langchain and Langgraph (AI Agents)</li>
                            <li>• Twilio and Vonage (SMS and Voice APIs)</li>
                        </ul>
                    </div>
                </div>

                <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                    <a href='https://esotericnetwork.site' className="text-xl font-semibold mb-2">Esoteric Network</a>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Post writings, art, and philosophies. Connect, comment, and support fellow seekers on their spiritual journeys.
                    </p>
                    <div className="space-y-2">
                        <h4 className="font-medium">Tech Stack:</h4>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                            <li>• Nextjs (Backend Framework)</li>
                            <li>• Tailwindcss (CSS Framework)</li>
                            <li>• Posthog (Analytics)</li>
                            <li>• Xata (Serverless Postgres)</li>
                            <li>• Drizzle Orm (Database Orm)</li>
                            <li>• Vercel Blob (Image Storage)</li>
                            <li>• Redis (Caching)</li>
                        </ul>
                    </div>
                </div>

                <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                    <a href='https://resume-sync1.vercel.app/' className="text-xl font-semibold mb-2">Resume Sync</a>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Organize resumes with version control, track applications, and join a supportive community for career insights.
                    </p>
                    <div className="space-y-2">
                        <h4 className="font-medium">Tech Stack:</h4>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                            <li>• Nextjs (Backend Framework)</li>
                            <li>• Tailwindcss (CSS Framework)</li>
                            <li>• Posthog (Analytics)</li>
                            <li>• Sqlite (Sqlite)</li>
                            <li>• Drizzle Orm (Database Orm)</li>
                            <li>• Uploadthing (File Uploading)</li>
                            <li>• Redis (Caching)</li>
                        </ul>
                    </div>
                </div>

                <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
                    <a href='https://ethereal-archive.vercel.app/' className="text-xl font-semibold mb-2">Ethereal Archive</a>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Empower collaboration, securely store and share files effortlessly.
                    </p>
                    <div className="space-y-2">
                        <h4 className="font-medium">Tech Stack:</h4>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                            <li>• Nextjs (Backend Framework)</li>
                            <li>• Tailwindcss (CSS Framework)</li>
                            <li>• Posthog (Analytics)</li>
                            <li>• Convex (Realtime Database)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

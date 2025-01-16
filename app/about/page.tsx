import { ProjectSection } from '@/components/project-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About - Anand Mohanan',
    description: 'Full Stack Developer with expertise in React, Node.js, and cloud technologies. Learn about my experience, tech stack, and certifications.',
    keywords: 'Full Stack Developer, React, Node.js, Golang, Rust, Cloud Computing, Linux, Certifications',
    openGraph: {
        title: 'About - Anand Mohanan',
        description: 'Full Stack Developer with expertise in React, Node.js, and cloud technologies.',
        type: 'website',
        url: 'https://www.anandmohanan.site/about',
    },
}

export default function About() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">About</h1>
            <p>
                I strive to stay current and meet the needs of users by keeping up with the constantly
                evolving field of computing and new programming languages that arise.
            </p>

            <section>
                <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 dark:border-gray-700 p-2">💻 Front-end</th>
                            <th className="border border-gray-300 dark:border-gray-700 p-2">🛡️ Back-end</th>
                            <th className="border border-gray-300 dark:border-gray-700 p-2">🗄️ Database</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">React, Nextjs</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">Node.js, Golang, Rust</td>
                            <td className="border border-gray-300 dark:border-gray-700 p-2">Postgres, sql, sqlite, MongoDb</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <ul className="list-disc pl-5">
                <li>Likes to solve programming problems using C++, Zig.</li>
                <li>Also I play around with ocaml and lisp occasionally.</li>
            </ul>

            <section>
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
                <ul className="list-disc pl-5">
                    <li>Full Stack Developer @ VAutomate (current)</li>
                    <li>Freelancing for an american TV provider building their UI components. (current)</li>
                    <li>Fixing Legacy Code for a Real Estate company. (current)</li>
                    <li>Software Engineer @ Avasoft ( 1 year 2 months )</li>
                    <li>Salesforce Admin Intern @ Smartbridge ( 1 month )</li>
                </ul>
            </section>

                <ProjectSection />

            <section>
                <h2 className="text-2xl font-bold mb-4">Areas of interest</h2>
                <ul className="list-disc pl-5">
                    <li>Web development.</li>
                    <li>Aws cloud.</li>
                    <li>Linux server management.</li>
                    <li>Salesforce administrator.</li>
                    <li>Api development.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4">Certifications</h2>
                <ul className="list-disc pl-5">
                    <li>Certified Scrum Master - (Scrum Alliance)</li>
                    <li>Academy Accreditation - Generative AI Fundamentals (DataBricks)</li>
                    <li>Graph developer professional - Apollo graphql.</li>
                    <li>Graph developer associate - Apollo graphql.</li>
                    <li>Docker essentials:A developer introduction.</li>
                    <li>IBM carbon systems developer essentials - React.</li>
                    <li>NPTEL - An introduction to programming through c++.</li>
                    <li>NPTEL - Cloud computing.</li>
                    <li>University of michigan Coursera - An introduction to data science in python.</li>
                </ul>
            </section>
        </div>
    )
}



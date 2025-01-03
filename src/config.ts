import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
    website: "https://anandmohanan.site/",
    author: "Anand Mohanan",
    profile: "https://anandmohanan.site/",
    desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
    title: "Anand Mohanan",
    ogImage: "og.png",
    lightAndDarkMode: true,
};

export const LOCALE = {
    lang: "en", // html lang code. Set this empty and default will be "en"
    langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
    enable: false,
    svg: true,
    width: 216,
    height: 46,
};

export const SOCIALS: SocialObjects = [
    {
        name: "Github",
        href: "https://github.com/anandMohanan",
        linkTitle: ` ${SITE.title} on Github`,
        active: true,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/anand-mohanan",
        linkTitle: `${SITE.title} on LinkedIn`,
        active: true,
    },
    {
        name: "Mail",
        href: "mailto:anandmohanan@gmail.com",
        linkTitle: `Send an email to ${SITE.title}`,
        active: true,
    },
    {
        name: "X",
        href: "https://x.com/Neimand7777",
        linkTitle: `${SITE.title} on X`,
        active: true,
    },
    {
        name: "GitLab",
        href: "https://gitlab.com/anand7777",
        linkTitle: `${SITE.title} on GitLab`,
        active: true,
    },
    {
        name: "Reddit",
        href: "https://www.reddit.com/user/neimand7777/",
        linkTitle: `${SITE.title} on Reddit`,
        active: false,
    },
];

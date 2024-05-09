// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_DESCRIPTION = 'Astrofy is a free and open-source template for your Personal Portfolio Website built with Astro and TailwindCSS. Create in minutes a website with Blog, CV, Project Section, Store and RSS Feed.';

import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
    website: "https://fbl.page.dev", // replace this with your deployed domain
    author: "fbl",
    desc: "朝花夕拾",
    title: "首页",
    ogImage: "astropaper-og.jpg",
    lightAndDarkMode: true,
    posts: ["note"]
};
export const SITE_TITLE = SITE.desc;
export const LOCALE = ["zh-cn"]; // set to [] to use the environment default
export const TRANSITION_API = true
export const LOGO_IMAGE = {
    enable: false,
    svg: true,
    width: 216,
    height: 46,
};

export const SOCIALS: SocialObjects = [
    {
        name: "WRITE",
        href: "https://mdd.1.asia/keystatic",
        linkTitle: `WRITE`,
        active: false,
    },
    {
        name: "RSS",
        href: "/atom.xml",
        linkTitle: `RSS Feed`,
        active: true,
    },
    {
        name: "Github",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: ` ${SITE.title} on Github`,
        active: false,
    },
    {
        name: "Facebook",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Facebook`,
        active: false,
    },
    {
        name: "Instagram",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Instagram`,
        active: false,
    },
    {
        name: "LinkedIn",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on LinkedIn`,
        active: false,
    },
    {
        name: "Mail",
        href: "mailto:yourmail@gmail.com",
        linkTitle: `Send an email to ${SITE.title}`,
        active: false,
    },
    {
        name: "Twitter",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Twitter`,
        active: false,
    },
    {
        name: "Twitch",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Twitch`,
        active: false,
    },
    {
        name: "YouTube",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on YouTube`,
        active: false,
    },
    {
        name: "WhatsApp",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on WhatsApp`,
        active: false,
    },
    {
        name: "Snapchat",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Snapchat`,
        active: false,
    },
    {
        name: "Pinterest",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Pinterest`,
        active: false,
    },
    {
        name: "TikTok",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on TikTok`,
        active: false,
    },
    {
        name: "CodePen",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on CodePen`,
        active: false,
    },
    {
        name: "Discord",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Discord`,
        active: false,
    },
    {
        name: "GitLab",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on GitLab`,
        active: false,
    },
    {
        name: "Reddit",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Reddit`,
        active: false,
    },
    {
        name: "Skype",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Skype`,
        active: false,
    },
    {
        name: "Steam",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Steam`,
        active: false,
    },
    {
        name: "Telegram",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Telegram`,
        active: false,
    },
    {
        name: "Run",
        href: "https://fblrun.pages.dev/",
        linkTitle: `${SITE.title} on Run`,
        active: true,
    },
    {
        name: "Mastodon",
        href: "https://github.com/satnaing/astro-paper",
        linkTitle: `${SITE.title} on Mastodon`,
        active: false,
    },
];

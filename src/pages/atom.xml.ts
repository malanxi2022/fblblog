import rss from "@astrojs/rss";
import { SITE } from "../config";
import { getCollection } from "astro:content";
//
// export async function get(context) {
//     let blog = await getCollection("blog");
//     let n = await getCollection("note");
//     let items2 = blog.map((post) => ({
//         title: post.data.title,
//         pubDatetime: post.data.pubDatetime,
//         description: post.data.description,
//         link: `/blog/${post.slug}/`,
//     }));
//     // let items2 = n.map((post) => ({
//     //     title: post.data.title,
//     //     pubDatetime: post.data.pubDatetime,
//     //     description: post.data.description,
//     //     link: `/note/${post.slug}/`,
//     // }));
//     // let items3 = items.contact(items2)
//     return rss({
//         title: SITE.title,
//         description: SITE.desc,
//         site: SITE.website,
//         items: items2,
//     });
// }

// import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import {getNotes} from "../utils";

const parser = new MarkdownIt();

export async function GET(_context: APIContext) {
    let note = await getNotes();
    const allowedTags = sanitizeHtml.defaults.allowedTags.concat(['img'])
    let items3 = note.map((post) => ({
        title: post.data.title,
        pubDatetime: post.data.pubDatetime,
        description: post.data.description,
        link: `/note/${post.slug}/`,
        content: sanitizeHtml(parser.render(post.body), { allowedTags, }),
        tags: post.data.tags
    }));
    return rss({
        title: SITE.title,
        description: SITE.desc,
        site: SITE.website,
        items: items3.map((post) => {
            return {
                link: post.link,
                // author: author,
                content: post.content,
                title: post.title,
                pubDate: post.pubDatetime,
                description: post.description,
                // customData: post.data.customData,
                tags: post.tags,
                // commentsUrl: post.data.commentsUrl,
                // source: post.data.source,
                // enclosure: post.data.enclosure,
            }
        }),
        stylesheet: '/pretty-feed-v3.xsl',
    });
}

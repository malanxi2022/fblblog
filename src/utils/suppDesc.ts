import type { CollectionEntry } from "astro:content";
import sanitizeHtml from 'sanitize-html'
import MarkdownIt from 'markdown-it'

const parser = new MarkdownIt()
const suppDesc = (desc: string, content) => {
    if (desc) {
        return desc
    }
    const html = parser.render(content)
    const sanitized = sanitizeHtml(html, { allowedTags: [] })
    return sanitized.slice(0, 100)
};

export default suppDesc;

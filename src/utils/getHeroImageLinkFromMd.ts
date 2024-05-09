import { slugifyAll } from "./slugify";
import type { CollectionEntry } from "astro:content";

export default function (post) {
    if (post.heroImage)
        return post.heroImage;
    const mdText = post.body;
    const markdownImagePattern = /!\[(.*?)\]\(([^)]+)\)/g; // 匹配标准图片语法
    const referencePattern = /^\[(.+?)\]:\s*(\S+)(?:\s+"(.+?)")?\s*$/mg; // 匹配参考式链接语法

    const standardImages = [];
    let match;
    while ((match = markdownImagePattern.exec(mdText)) !== null) {
        standardImages.push(match[2]); // 提取第二个捕获组，即图片 URL
    }

    const referenceLinks = {};
    let refMatch;
    while ((refMatch = referencePattern.exec(mdText)) !== null) {
        if (refMatch[2].startsWith('http')) { // 确保是 URL 类型的参考链接
            referenceLinks[refMatch[1]] = refMatch[2]; // 存储参考名与对应的 URL
        }
    }

    const allImageLinks = [...standardImages]; // 合并两种类型的图片链接

    // 处理包含参考式链接的图片
    // markdownImagePattern.lastIndex = 0; // 重置正则表达式索引
    // while ((match = markdownImagePattern.exec(mdText)) !== null) {
    //     const altText = match[1];
    //     const refName = match[2].slice(1, -1); // 去除方括号
    //     if (referenceLinks.hasOwnProperty(refName)) {
    //         allImageLinks.push(referenceLinks[refName]);
    //     } else {
    //         console.warn(`未找到参考链接 "${refName}" 对应的图片 URL`);
    //     }
    // }

    if (allImageLinks.length === 0) {
        return null
    } else {
        var image = allImageLinks[0]
        return  image.startsWith('http') ? image : image.split('public')[1];
    }
}


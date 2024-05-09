import {getCollection} from "astro:content";


export async function getNotes() {
    const posts = await getCollection('note')
    posts.sort((a, b) => {
        const aDate = a.data.pubDatetime || new Date()
        const bDate = b.data.pubDatetime || new Date()
        return  bDate.getTime() - aDate.getTime()
    })
    return posts
}

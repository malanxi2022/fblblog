import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getUniqueTags = (posts: CollectionEntry<"blog">[]) => {
  const filteredPosts =  posts.filter(({ data }) => !data.draft);
  let tags: string[] = filteredPosts
    .flatMap(post => post.data.tags)
    .map(tag => slugifyStr(tag));
  const tagCounts: { [key: string]: number } = {};
  for (const tag of tags) {
    tagCounts[tag] = tagCounts[tag] ? tagCounts[tag] + 1 : 1;
  }

  tags = tags
    .filter(
      (value: string, index: number, self: string[]) =>
        self.indexOf(value) === index
    )
    .sort((tagA: string, tagB: string) => tagA.localeCompare(tagB));

  return { tags: tags, tagCounts: tagCounts };
};

export default getUniqueTags;

import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";

const getTranslaction = (item: string) => {
  if (item === "posts") {
    return "日记";
  }
  if (item === "tags") {
    return "标签";
  }
  if (item === "notes") {
    return "笔记";
  }
  if (item === "about") {
    return "关于";
  }
  if (item === "search") {
    return "搜索";
  }
  if (item === "archives") {
    return "归档";
  }
  return item;
};

export default getTranslaction;

import React, { useEffect, useRef, useState, useMemo } from "react";
import type { CollectionEntry } from "astro:content";

export type SearchItem = {
  title: string;
  description: string;
  data: CollectionEntry<"blog">["data"];
};

interface Props {
  searchList: SearchItem[];
}

interface SearchResult {
  item: SearchItem;
  refIndex: number;
}
import algoliasearch from "algoliasearch/lite";
import {
  Configure,
  Highlight,
  Hits,
  InstantSearch,
  RefinementList,
  SearchBox,
} from "react-instantsearch";
import CustomSearchBox from "@components/CustomSearchBox.tsx";
import {SITE} from "../config.ts";

const searchClient = algoliasearch(
  "QP4WN0IB1W",
  "08b36ae83999b4ea83345429017ca3ba"
);

const onStateChange = ({ uiState, setUiState }) => {
    // Custom logic
    setUiState(uiState);
};

function Hit({ hit }) {
  var url = SITE.website + "blog/" + hit.url;
  return (
    <article>
      <a href={url}>
        <h1 className={"text-xl font-bold mt-5"}>
          <Highlight attribute="title" hit={hit} />
        </h1>
        <p className={"py-1 text-1xl"}>
          <Highlight attribute="content" hit={hit} />
        </p>
      </a>
    </article>
  );
}

export default function SearchBar2({ searchList }: Props) {
  return (
    <InstantSearch searchClient={searchClient} indexName="dev_blog" onStateChange={onStateChange} >
        <RefinementList attribute="brand" limit={10}/>
      <CustomSearchBox></CustomSearchBox>
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
}

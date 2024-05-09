import React, { useState, useRef } from "react";
import { useInstantSearch, useSearchBox } from "react-instantsearch";

export default function CustomSearchBox(props) {
  const { query, refine } = useSearchBox(props);
  const { status } = useInstantSearch();
  const [inputValue, setInputValue] = useState(query);
  const inputRef = useRef<HTMLInputElement>(null);

  const isSearchStalled = status === "stalled";

  function setQuery(newQuery: string) {
    setInputValue(newQuery);

    refine(newQuery);
  }

  return (
    <div>
      <form
        action=""
        role="search"
        noValidate
        onSubmit={event => {
          event.preventDefault();
          event.stopPropagation();

          if (inputRef.current) {
            inputRef.current.blur();
          }
        }}
        onReset={event => {
          event.preventDefault();
          event.stopPropagation();

          setQuery("");

          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        <label className="relative block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2 opacity-75">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  stroke-linecap="round" stroke-linejoin="round" width="24" height="24" viewBox="0 0 24 24" >
              <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
            </svg>
          </span>
          <input
            className="block w-full rounded border border-skin-fill
        border-opacity-40 bg-skin-fill py-3 pl-10
        pr-3 placeholder:italic placeholder:text-opacity-75
        focus:border-skin-accent focus:outline-none"
            placeholder="Search for anything..."
            ref={inputRef}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            maxLength={512}
            type="search"
            value={inputValue}
            onChange={event => {
              setQuery(event.currentTarget.value);
            }}
            autoFocus
          />
        </label>
        <span hidden={!isSearchStalled}>查找中…</span>
      </form>
    </div>
  );
}

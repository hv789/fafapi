"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState<string>();
  const [searchResults,setSearchResults] = useState<{
    results: string[];
    duration: number;
  }>();

  useEffect(() => {
    const fetchData = async () => {
      if(!input)return setSearchResults(undefined);
    }
  }, [input]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </div>
  );
}

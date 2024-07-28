import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SearchResults() {
  const [results, setResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("query");
    if (query) {
      fetch(`http://localhost:3000/searchbyplace/${encodeURIComponent(query)}`)
        .then((response) => response.json())
        .then((data) => setResults(data))
        .catch((error) =>
          console.error("Error fetching search results", error)
        );
    }
  }, [location.search]);

  return (
    <div>
      <h1>Search Results</h1>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.place_name}</li>
        ))}
      </ul>
    </div>
  );
}

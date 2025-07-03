import React from 'react';
import '../styles/SearchResults.css';

const searchResults = [
  // Hardcoded search results based on user search (for now)
  { id: 1, title: 'Project Manager', company: 'Google', location: 'Remote', flexibility: 'Fully Remote' },
];

const SearchResults = () => {
  return (
    <div className="search-results">
      <h3>Search Results</h3>
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <div className="job-card" key={result.id}>
            <h4>{result.title}</h4>
            <p>{result.company} | {result.location}</p>
            <p>{result.flexibility}</p>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;

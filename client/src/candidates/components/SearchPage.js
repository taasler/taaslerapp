import React, { useState } from 'react';
import '../styles/SearchPage.css';
import MatchedJobs from './MatchedJobs';
import SearchResults from './SearchResults';
import JobSearch from './JobSearch';

const SearchPage = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    title: '',
    location: '',
    flexibility: '',
    advancedFilters: false,
  });

  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleAdvancedFilters = () => {
    setSearchCriteria({ ...searchCriteria, advancedFilters: !searchCriteria.advancedFilters });
  };

  const handleSearch = () => {
    // Ensure at least one criterion is filled
    if (searchCriteria.title || searchCriteria.location || searchCriteria.flexibility) {
      setIsSearchActive(true);  // This will trigger the search results to show
    } else {
      alert('Please fill in at least one search criterion.');
    }
  };

  return (
    <div className="search-page">
      <h2 className="search-title">Find Your Next Contract</h2>
      
      <div className="search-panel">
        <input
          type="text"
          placeholder="Job Title, Skill, or Company"
          value={searchCriteria.title}
          onChange={(e) => setSearchCriteria({ ...searchCriteria, title: e.target.value })}
          className="search-input"
        />
        <input
          type="text"
          placeholder="Location"
          value={searchCriteria.location}
          onChange={(e) => setSearchCriteria({ ...searchCriteria, location: e.target.value })}
          className="search-input"
        />
        <input
          type="text"
          placeholder="Preferred Work Flexibility"
          value={searchCriteria.flexibility}
          onChange={(e) => setSearchCriteria({ ...searchCriteria, flexibility: e.target.value })}
          className="search-input"
        />
        
        <button onClick={handleSearch} className="search-btn">
          Find
        </button>
      </div>

      <button onClick={toggleAdvancedFilters} className="advanced-filters-btn">
        {searchCriteria.advancedFilters ? 'Hide Advanced Filters' : 'Show Advanced Filters'}
      </button>

      {searchCriteria.advancedFilters && (
        <div className="advanced-filters">
          {/* Advanced filter inputs like Rate slider, Work Hours dropdown, Industry, etc. */}
        </div>
      )}

      <div className="job-results">
        {!isSearchActive ? <MatchedJobs /> : <SearchResults />}
      </div>
    </div>
  );
};

export default SearchPage;

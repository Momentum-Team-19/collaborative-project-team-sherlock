import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchBar = ({ setSearchTerm }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    const encodedSearchTerm = encodeURIComponent(searchInput);
    setSearchTerm(encodedSearchTerm);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className='search-bar'>
      <FaSearch onClick={handleSearch} className='search-icon' />
      <input
        type='text'
        id='search-icon'
        name='search'
        placeholder='search...'
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
        onKeyDown={handleEnter}
      />
    </div>
  );
};
export default SearchBar;

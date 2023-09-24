import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = ({ setResults, results }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const encodedSearchTerm = encodeURIComponent(searchInput);
    setSearchTerm(encodedSearchTerm);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    const picURL = `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=SpMo7_x_TftYeBiuef_NpWCGNYRtUSXFjq0NG1tJAb4`;
    axios
      .get(picURL)
      .then((response) => {
        setResults(response.data.results); // Set the results state with the data from the API
        console.log("results: ", results);
        console.log("picURL: ", picURL);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [searchTerm]);

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

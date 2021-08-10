import Image from 'next/image';
import { useEffect, useState } from 'react';
import SearchIcon from '../../public/svg/searchicon.svg';

const list = [
  'pizza',
  'momo',
  'pasta',
  'chicken pasta',
  'white momo',
  'brown momo',
];

const SearchBox = (props) => {
  const [query, setQuery] = useState('');
  const [suggestion, setSuggestion] = useState([]);

  const searchHandler = (e) => {
    e.preventDefault();
    props.onSearch(query);
    setQuery('');
    setSuggestion([]);
  };

  const searchSuggestionHandler = (val) => {
    props.onSearch(val);
    setSuggestion([]);
    setQuery('');
  };

  useEffect(() => {
    if (query) {
      const timer1 = setTimeout(() => {
        const result = list.filter((x) => x.includes(query));
        setSuggestion(result);
      }, 1000);
      return () => {
        clearTimeout(timer1);
      };
    }
  }, [query]);

  return (
    <>
      <form
        autoComplete="off"
        className="navbar__search"
        onSubmit={searchHandler}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
          placeholder="Search all Recipes,Food,Ingredients....."
        />
        {suggestion.length > 0 && (
          <ul className="autocomplete">
            {suggestion.map((s) => (
              <li
                className="li"
                onClick={() => searchSuggestionHandler(s)}
                key={s}
              >
                {s}
              </li>
            ))}
          </ul>
        )}

        <button className="search-btn">
          <Image src={SearchIcon} width={30} height={30} alt="searchicon" />
        </button>
      </form>
    </>
  );
};

export default SearchBox;

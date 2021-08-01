import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';

const SideBar = () => {
  const [expandedSort, setExpandedSort] = useState(false);
  const router = useRouter();
  const onChangeHandler = (val) => {
    if (router.query.page) {
      router.push(`/recipes?sort=${val}&page=${router.query.page}`);
    } else {
      router.push(`/recipes?sort=${val}`);
    }
  };

  const expandedSorts = (
    <>
      <li className="normal-text">
        Highest Price
        <input
          value="-price"
          type="radio"
          name="sort-price"
          onChange={(e) => onChangeHandler(e.target.value)}
        />
      </li>
      <li className="normal-text">
        Lowest Price
        <input
          value="price"
          type="radio"
          name="sort-price"
          onChange={(e) => onChangeHandler(e.target.value)}
        />
      </li>
      <li className="normal-text">
        Highest Rating
        <input type="radio" name="sort-rating" />
      </li>
      <li className="normal-text">
        Lowest Rating
        <input type="radio" name="sort-rating" />
      </li>
    </>
  );

  const expandedFilters = (
    <>
      <li className="normal-text">
        Vegetrian
        <input type="radio" name="filter" />
      </li>
      <li className="normal-text">
        Non Vegetrian
        <input type="radio" name="filter" />
      </li>
      <li className="normal-text">
        Sugar free
        <input type="radio" name="filter" />
      </li>
    </>
  );

  return (
    <div className="sidebar">
      <ul className="sidebar__container">
        <li className="normal-text li-active">All recipes</li>
        <li
          className="normal-text"
          onClick={() => setExpandedSort(!expandedSort)}
        >
          Sort By{' '}
          <FontAwesomeIcon icon={!expandedSort ? faCaretDown : faCaretUp} />
        </li>
        {expandedSort && expandedSorts}

        <li
          onClick={() => router.push('/recipes/categories')}
          className="normal-text"
        >
          Categories
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

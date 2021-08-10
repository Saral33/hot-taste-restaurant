import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useState } from 'react';

const SideBar = () => {
  const [expandedSort, setExpandedSort] = useState(false);
  const router = useRouter();

  // const onChangeHandler = (val) => {
  //   if (router.query.page || router.query.category) {
  //     if (router.query.page && router.query.category) {
  //       return router.push(
  //         `/recipes?category=${router.query.category}&sort=${val}&page=${router.query.page}`
  //       );
  //     }
  //     if (router.query.page && !router.query.category) {
  //       return router.push(`/recipes?sort=${val}&page=${router.query.page}`);
  //     }
  //     if (router.query.category && !router.query.page) {
  //       return router.push(
  //         `/recipes?category=${router.query.category}&sort=${val}`
  //       );
  //     }
  //   } else {
  //     router.push(`/recipes?sort=${val}`);
  //   }
  // };

  const onChangeHandler = (val) => {
    if (router.query.sort) {
      const query = router.asPath.replace(router.query.sort, val);
      router.push(query);
    } else {
      const query = router.asPath.includes('?') ? '&' : '?';
      router.push(`${router.asPath}${query}sort=${val}`);
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
        <li className="normal-text ">
          <Link href="/recipes">
            <a>All recipes</a>
          </Link>
        </li>
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

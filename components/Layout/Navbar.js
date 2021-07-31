import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SearchIcon from '../../public/svg/searchicon.svg';
import MenuIcon from '../../public/svg/menu.svg';
import CloseIcon from '../../public/svg/close.svg';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <a>
            {' '}
            <Image
              className="logo-image"
              alt="logo"
              src="/images/logo.png"
              width={115}
              height={115}
            />
          </a>
        </Link>
      </div>
      <div className="navbar__search">
        <input
          className="search-input"
          placeholder="Search all Recipes,Food,Ingredients....."
        />
        <button className="search-btn">
          <Image src={SearchIcon} width={30} height={30} alt="searchicon" />
        </button>
      </div>
      <ul className={click ? 'navbar__contents active' : 'navbar__contents'}>
        <li className="option">
          <Link href="/recipes">
            <a onClick={closeMobileMenu} className="navbar__links">
              Explore
            </a>
          </Link>
        </li>
        <li className="option">
          <Link href="/favourites">
            <a onClick={closeMobileMenu} className="navbar__links">
              <FontAwesomeIcon icon={faHeart} /> Favourites
            </a>
          </Link>
        </li>
        <li className="option">
          <Link href="/login">
            <a onClick={closeMobileMenu} className="navbar__links">
              Login/Register
            </a>
          </Link>
        </li>
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <Image alt="logo" src={CloseIcon} width={80} height={80} />
        ) : (
          <Image alt="logo" src={MenuIcon} width={80} height={80} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

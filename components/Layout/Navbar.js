import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import MenuIcon from '../../public/svg/menu.svg';
import CloseIcon from '../../public/svg/close.svg';
import { motion } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';
import SearchBox from '../Utils/SearchBox';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const router = useRouter();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const searchHandler = (query) => {
    router.push(`/recipes?search=${query}`);
  };

  return (
    <motion.nav className="navbar">
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          type: 'spring',
          stiffness: '130',
        }}
        className="logo"
      >
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
      </motion.div>
      <SearchBox onSearch={searchHandler} />
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
    </motion.nav>
  );
};

export default Navbar;

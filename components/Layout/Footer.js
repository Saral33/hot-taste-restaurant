import Link from 'next/dist/client/link';
import Image from 'next/dist/client/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container__1">
        <div className="logo">
          <Link href="/">
            <a>
              {' '}
              <Image
                className="logo-image"
                alt="logo"
                src="/images/logo.png"
                width={100}
                height={100}
              />
            </a>
          </Link>
        </div>
        <p className="normal-text">
          Hot Taste is fictional company created for project purpose only.
        </p>
        <p className="normal-text">
          Copyright &copy; 2021, created by Saral Karki
        </p>
        <div className="social-links">
          <p className="normal-text">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/prince.saral.9"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </p>
          <p className="normal-text">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.github.com/saral33"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </p>
          <p className="normal-text">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/saral-karki-0572481aa/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Navbar from './Navbar';
import { motion } from 'framer-motion';

const navVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      when: 'beforeChildren',
    },
  },
};

const buttonVariant = {
  hidden: {
    x: '-70vw',
  },
  visible: {
    x: 0,
  },
};

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <motion.div
        variants={navVariant}
        initial="hidden"
        animate="visible"
        className="header__container"
      >
        <span className="primary-text ">
          Enjoy Our <span style={{ color: '#c30001' }}>Hot Taste</span>
        </span>
        <span className="primary-text">In Cheap And Affordable Price</span>

        <motion.button variants={buttonVariant} className="btn-primary">
          Explore More
        </motion.button>
      </motion.div>
    </header>
  );
};

export default Header;

import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import { motion } from 'framer-motion';

const Layout = ({ children, title = 'Hot Taste', content }) => {
  const spring = {
    type: 'spring',
    damping: 20,
    stiffness: 100,
    when: 'afterChildren',
  };
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={content} />
      </Head>
      <Navbar />
      <motion.div
        transition={spring}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        className="main"
      >
        {children}
      </motion.div>

      <Footer />
    </>
  );
};

export default Layout;

import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

const Layout = ({ children, title = 'Hot Taste', content }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={content} />
      </Head>
      <Navbar />
      <div className="main">{children}</div>

      <Footer />
    </>
  );
};

export default Layout;

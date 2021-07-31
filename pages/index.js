import Head from 'next/head';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import About from '../components/Sections/About';
import LocationSection from '../components/Sections/LocationSection';
import NewsLetter from '../components/Sections/NewsLetter';
import RecipesSection from '../components/Sections/RecipesSection';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Get ready for exciting taste experience in cheap price only in Hot Taste. Quality does matters.We, Hot Taste are here to present you experience
          you have never felt before"
        />
        <title>Hot Taste</title>
      </Head>
      <Header />
      <About />
      <RecipesSection />
      <LocationSection />
      <NewsLetter />
      <Footer />
    </>
  );
}

import Layout from '../components/Layout/Layout';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/dist/client/image';
const Error404 = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className="error-page-container">
        <div className="error-page-content">
          <h1 className="section-header">404 Page not found</h1>
          <p className="normal-text">
            We couldnot find the page you were looking for. The page maybe
            deleted or didnot even existed. Maybe you were trying to view our
            tasty recipes.
          </p>
          <button
            onClick={() => router.push('/recipes')}
            className="btn-primary"
          >
            View Recipes
          </button>
          <div>
            <Image
              width={400}
              height={300}
              alt="error"
              src="/images/errorpage.png"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Error404;

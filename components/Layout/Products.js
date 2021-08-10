import ProductBox from './ProductBox';
import { useRouter } from 'next/dist/client/router';
import { useSelector } from 'react-redux';
import Image from 'next/dist/client/image';

const Products = () => {
  const { products, loading, count, error } = useSelector(
    (state) => state.allProducts
  );

  const router = useRouter();
  const page = Number(router.query.page) || 1;

  const pageHandler = (page) => {
    if (router.query.page) {
      const str = router.asPath.replace(router.query.page, page);
      router.push(str);
    } else {
      const query = router.asPath.includes('?') ? '&' : '?';
      router.push(`${router.asPath}${query}page=${page}`);
    }
  };

  const pageCalculator = (count) => {
    return Math.ceil(count / 9);
  };

  return (
    <div className="product__container">
      <h1 className="primary-heading">
        {router.query.search
          ? `Search result of "${router.query.search}"`
          : 'Our Recipes'}
      </h1>
      {loading ? (
        <h1>Loading....</h1>
      ) : router.query.search && products.length <= 0 ? (
        <>
          <h1>
            We could not found the result for &quot;{router.query.search}&quot;
          </h1>
          <p className="normal-text">Try searching other query</p>
          <button
            onClick={() => router.push('/recipes')}
            className="btn-secondary"
          >
            Go Back
          </button>
          <Image
            width={400}
            height={400}
            alt="error"
            src="/images/errorpage.png"
          />
        </>
      ) : (
        <>
          <div className="product__container__grid">
            {products.map((p) => (
              <ProductBox
                filter={p.category}
                key={p._id}
                keys={p._id}
                id={p._id}
                image={p.image_url}
                title={p.title}
                price={p.price}
                value={p.avgrating}
              />
            ))}
          </div>
          <div className="pagination__container">
            <div className="pagination">
              <button
                disabled={page === 1}
                onClick={() => pageHandler(page - 1)}
                className="search-btn "
              >
                Previous
              </button>
              <button disabled className="search-btn active-btn">
                {page}
              </button>
              {page + 1 <= pageCalculator(count) && (
                <button
                  onClick={() => pageHandler(page + 1)}
                  className="search-btn"
                >
                  {page + 1}
                </button>
              )}
              {page + 2 <= pageCalculator(count) && (
                <button
                  onClick={() => pageHandler(page + 2)}
                  className="search-btn"
                >
                  {page + 2}
                </button>
              )}
              {page + 1 <= pageCalculator(count) && (
                <button
                  onClick={() => pageHandler(page + 1)}
                  className="search-btn"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;

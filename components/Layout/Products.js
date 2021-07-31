import ProductBox from './ProductBox';
import { useRouter } from 'next/dist/client/router';
import { useSelector } from 'react-redux';

const Products = () => {
  const { products, loading, count, error } = useSelector(
    (state) => state.allProducts
  );

  const router = useRouter();
  const page = Number(router.query.page) || 1;

  const pageHandler = (page) => {
    let path;
    if (router.query.sort) {
      router.push(`/recipes?sort=${router.query.sort}&page=${page}`);
    } else {
      router.push(`/recipes?page=${page}`);
    }
  };

  const pageCalculator = (count) => {
    return Math.ceil(count / 9);
  };

  return (
    <div className="product__container">
      <h1 className="primary-heading">Our Recipes</h1>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <div className="product__container__grid">
            {products.map((p) => (
              <ProductBox
                key={p._id}
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

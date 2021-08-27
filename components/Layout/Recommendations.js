import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import Loader from '../Utils/Loader';
import ProductBox from './ProductBox';

const Recommendations = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const res = await axios.get(
          `${process.env.BASE_URL}/api/products/recommendations/${router.query.id}?category=${router.query.category}`
        );
        setProducts(res.data.recommendations);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error.response);
      }
    }
    if (router.query.id && router.query.category) {
      getData();
    }
  }, [router]);

  return (
    <div className="recommendations">
      <h1 className="recipe__heading">More like {title}</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="product__container__grid">
          {products.map((p) => (
            <ProductBox
              price={p.price}
              key={p._id}
              title={p.title}
              id={p._id}
              filter={p.category}
              image={p.image_url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Recommendations;

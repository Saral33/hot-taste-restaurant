import { useSelector } from 'react-redux';
import ProductBox from './ProductBox';

const CategoriesDetails = () => {
  const { error, categories } = useSelector((state) => state.categories);
  return (
    <div className="product__container">
      <h1 className="primary-heading">Categories</h1>
      <div className="product__container__grid">
        {categories.map((c) => (
          <ProductBox key={c._id} category={c.category} image={c.image} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesDetails;

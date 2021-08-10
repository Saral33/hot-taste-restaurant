import { useSelector } from 'react-redux';
import ProductBox from './ProductBox';
import { paginateArray } from '../../utils/arrayMethods';
import { useState } from 'react';

const CategoriesDetails = () => {
  const [page, setPage] = useState(1);

  const { error, categories } = useSelector((state) => state.categories);
  return (
    <div className="product__container">
      <h1 className="primary-heading">Categories</h1>
      <div className="product__container__grid">
        {paginateArray(categories, page).map((c) => (
          <ProductBox
            key={c._id}
            keys={c._id}
            category={c.category}
            image={c.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesDetails;

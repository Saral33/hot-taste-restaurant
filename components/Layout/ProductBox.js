import Image from 'next/image';
import StarRating from '../Utils/StarRating';
import Link from 'next/dist/client/link';
import { capitalizeFirstLetter } from '../../utils/letterUtils';

const ProductBox = ({ image, title, price, value, id, category, key }) => {
  return (
    <div className="product__box" key={key}>
      <Image
        className="product__image"
        width={120}
        height={120}
        alt="recipe"
        src={image}
        layout="responsive"
      />
      <div className="product__box__contents">
        {category && (
          <Link href={`/recipes?category=${category}`}>
            <a className=" normal-link primary-heading">
              {capitalizeFirstLetter(category)}
            </a>
          </Link>
        )}
        {title && (
          <Link href={`/recipes/${id}`}>
            <a className=" normal-link normal-text">
              {title} (${price})
            </a>
          </Link>
        )}
        {value >= 0 && (
          <p className="normal-text">
            <StarRating value={value} />
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductBox;

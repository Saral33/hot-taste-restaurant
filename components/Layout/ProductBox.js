import Image from 'next/image';
import StarRating from '../Utils/StarRating';
import Link from 'next/dist/client/link';

const ProductBox = ({ image, title, price, value, id }) => {
  return (
    <div className="product__box">
      <Image
        className="product__image"
        width={120}
        height={120}
        alt="recipe"
        src={image}
        layout="responsive"
      />
      <div className="product__box__contents">
        <Link href={`/recipes/${id}`}>
          <a className=" normal-link normal-text">
            {title} (${price})
          </a>
        </Link>

        <p className="normal-text">
          <StarRating value={value} />
        </p>
      </div>
    </div>
  );
};

export default ProductBox;

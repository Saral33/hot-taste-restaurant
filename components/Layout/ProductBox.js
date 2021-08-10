import Image from 'next/image';
import StarRating from '../Utils/StarRating';
import Link from 'next/dist/client/link';
import { capitalizeFirstLetter } from '../../utils/arrayMethods';
import Animate from '../Animations/Animate';

const ProductBox = ({
  image,
  title,
  price,
  value,
  id,
  category,
  keys,
  filter,
}) => {
  return (
    <Animate
      delay={0.4}
      duration={1.5}
      type="fade"
      className="product__box"
      key={keys}
    >
      <div className="product__image">
        <Image
          alt="recipe"
          src={image}
          width={250}
          height={200}
          layout="responsive"
          objectFit="cover"
        />
      </div>

      <div className="product__box__contents">
        {category && (
          <Link href={`/recipes?category=${category}`}>
            <a className=" normal-link primary-heading">
              {capitalizeFirstLetter(category)}
            </a>
          </Link>
        )}
        {title && (
          <Link href={`/recipes/${id}?category=${filter}`}>
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
    </Animate>
  );
};

export default ProductBox;

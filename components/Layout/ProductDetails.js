import Rating from '../Utils/StarRating';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faHeart,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';

const ProductDetails = () => {
  const router = useRouter();
  const { error, product } = useSelector((state) => state.singleProduct);

  return (
    <div className="recipe__details__container">
      <button onClick={() => router.back()} className="btn-secondary">
        {' '}
        <FontAwesomeIcon icon={faArrowLeft} /> Go Back
      </button>
      <h1 className="recipe__heading">{product.title}</h1>
      <p className="normal-text">By:- {product.publisher}</p>
      <p className="normal-text">
        <Rating color="#C10000" value={product.avgratings} /> (321 Reviews)
      </p>
      <p className="normal-text">Sales: {product.sales}</p>
      <p className="normal-text">Price: ${product.price}</p>
      <div className="recipe__details__contents">
        <div className="recipe__details">
          <div className="recipe__details__image">
            <Image
              className="recipe__image"
              alt="recipe"
              height={500}
              width={700}
              src={product.image_url}
              layout="fixed"
            />
          </div>
          <div className="recipe__details__side">
            <p className="normal-text">
              If you liked this recipe you can visit at
              <a
                target="_blank"
                rel="noreferrer"
                className="normal-link"
                href={product.source_url}
              >
                {' '}
                {product.publisher}
              </a>{' '}
              one of our sponsers for direction of cooking and ingredients so
              you can even make it at home because we care for you.
            </p>
            <button className="btn-primary">
              <FontAwesomeIcon icon={faShoppingCart} /> Order Now
            </button>
          </div>
        </div>

        <div className="descriptions">
          <h1 className="recipe__heading">Description</h1>
          <p className="normal-text">{product.description}</p>
          <button className="btn-primary">
            <FontAwesomeIcon icon={faHeart} /> Add to favourites
          </button>
        </div>
        <div className="reviews">
          <h1 className="recipe__heading">Reviews</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

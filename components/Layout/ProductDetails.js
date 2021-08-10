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
import Rate from '../Utils/Rate';
import React from 'react';
import Recommendations from './Recommendations';

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
              width={650}
              src={product.image_url}
              layout="responsive"
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
          <div className="reviews__left">
            <h1 className="recipe__heading">Give some feedback</h1>
            <p className="normal-text">Rate the recipe</p>
            <div className="rater">
              <Rate />
            </div>
            <form className="form__comment">
              <textarea
                className="comment"
                cols={44}
                rows={4}
                placeholder="Comment your opinion, review about this recipe"
              />
              <button className="btn-secondary">Submit</button>
            </form>
          </div>
          <div className="reviews__right">
            <h1 className="recipe__heading">Some Reviews</h1>
            <React.Fragment>
              <div className="reviews__upper">
                <Image
                  className="reviews__image"
                  src="/images/berlin.jpg"
                  height={30}
                  width={30}
                  alt="userpic"
                />
                <p className="reviews__name">User Name</p>
              </div>
              <div className="reviews__lower">
                <Rating value={3} />
                <p className="normal-text">Very amazing!!</p>
              </div>
              <div className="reviews__upper">
                <Image
                  className="reviews__image"
                  src="/images/berlin.jpg"
                  height={30}
                  width={30}
                  alt="userpic"
                />
                <p className="reviews__name">User Name</p>
              </div>
              <div className="reviews__lower">
                <Rating value={3} />
                <p className="normal-text">Very amazing!!</p>
              </div>
            </React.Fragment>
            <div className="pagination__container">
              <div className="pagination">
                <button className="search-btn">Previous</button>
                <button className="search-btn">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Recommendations title={product.title} />
    </div>
  );
};

export default ProductDetails;

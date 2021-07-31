import Image from 'next/image';
import StarRating from './StarRating';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock, faUser } from '@fortawesome/free-regular-svg-icons';

const Card = ({
  title,
  image,
  value,
  reviews,
  price,
  communication,
  staffs,
  time,
  nolink,
}) => {
  const router = useRouter();
  const routeHandler = () => {
    if (!nolink) router.push('/recipes');
  };
  return (
    <div className="card" onClick={routeHandler}>
      {image && (
        <div className="card__image__container">
          <Image width={310} height={200} src={image} alt={title} />
        </div>
      )}

      <div className="card__contents">
        <h1 className="primary-heading">{title}</h1>
        {value && (
          <p className="normal-text" onClick={(e) => e.stopPropagation()}>
            <StarRating value={value} color="#c300009d" /> ({reviews})
          </p>
        )}
        {price && (
          <h2 className="section-header">
            ${price}
            <span
              className="normal-text"
              style={{
                color: '#000',
                textTransform: 'lowercase',
                letterSpacing: '1px',
              }}
            >
              /plate
            </span>
          </h2>
        )}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          {communication && (
            <p className="normal-text">
              <FontAwesomeIcon
                style={{ color: '#c300009d' }}
                icon={faPhoneAlt}
              />{' '}
              {communication}
            </p>
          )}
          {staffs && (
            <p className="normal-text">
              <FontAwesomeIcon style={{ color: '#c300009d' }} icon={faUser} />{' '}
              {staffs}
            </p>
          )}
          {time && (
            <p className="normal-text">
              <FontAwesomeIcon style={{ color: '#c300009d' }} icon={faClock} />{' '}
              {time}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

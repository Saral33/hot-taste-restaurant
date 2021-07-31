import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ value, color }) => {
  return (
    <>
      <FontAwesomeIcon
        style={{ color }}
        icon={value >= 1 ? faStar : value >= 0.5 ? faStarHalfAlt : farStar}
      />
      <FontAwesomeIcon
        style={{ color }}
        icon={value >= 2 ? faStar : value >= 1.5 ? faStarHalfAlt : farStar}
      />
      <FontAwesomeIcon
        style={{ color }}
        icon={value >= 3 ? faStar : value >= 2.5 ? faStarHalfAlt : farStar}
      />
      <FontAwesomeIcon
        style={{ color }}
        icon={value >= 4 ? faStar : value >= 3.5 ? faStarHalfAlt : farStar}
      />
      <FontAwesomeIcon
        style={{ color }}
        icon={value >= 5 ? faStar : value >= 4.5 ? faStarHalfAlt : farStar}
      />
    </>
  );
};

export default StarRating;

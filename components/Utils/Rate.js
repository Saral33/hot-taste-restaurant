import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Rate = ({ value }) => {
  const [star, setStar] = useState(0);
  const [hover, setHover] = useState(0);
  const ratingReset = () => {
    setHover(0);
  };
  return (
    <>
      <div className="tooltip">
        <FontAwesomeIcon
          className="rater__icon"
          onMouseOver={() => setHover(1)}
          onMouseLeave={() => ratingReset()}
          onClick={() => setStar(1)}
          icon={hover >= 1 ? faStar : star === 0 ? farStar : faStar}
        />
        <span className="tooltiptext">😥 Bad</span>
      </div>
      <div className="tooltip">
        <FontAwesomeIcon
          className="rater__icon"
          onMouseOver={() => setHover(2)}
          onMouseLeave={() => ratingReset()}
          onClick={() => setStar(2)}
          icon={hover >= 2 ? faStar : star > 1 ? faStar : farStar}
        />
        <span className="tooltiptext">😌 Average</span>
      </div>
      <div className="tooltip">
        <FontAwesomeIcon
          className="rater__icon"
          onMouseOver={() => setHover(3)}
          onMouseLeave={() => ratingReset()}
          onClick={() => setStar(3)}
          icon={hover >= 3 ? faStar : star > 2 ? faStar : farStar}
        />
        <span className="tooltiptext">🙂 Good</span>
      </div>
      <div className="tooltip">
        <FontAwesomeIcon
          className="rater__icon"
          onMouseOver={() => setHover(4)}
          onMouseLeave={() => ratingReset()}
          onClick={() => setStar(4)}
          icon={hover >= 4 ? faStar : star > 3 ? faStar : farStar}
        />
        <span className="tooltiptext">😊 Best</span>
      </div>
      <div className="tooltip">
        <FontAwesomeIcon
          className="rater__icon"
          onMouseOver={() => setHover(5)}
          onMouseLeave={() => ratingReset()}
          onClick={() => setStar(5)}
          name={5}
          icon={hover >= 5 ? faStar : star > 4 ? faStar : farStar}
        />
        <span className="tooltiptext">😍 Excellent</span>
      </div>
    </>
  );
};

Rate.defaultProps = {
  value: 0,
};

export default Rate;

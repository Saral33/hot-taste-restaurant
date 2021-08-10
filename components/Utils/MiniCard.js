import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Animate from '../Animations/Animate';

const MiniCard = ({ title, icon, description }) => {
  return (
    <>
      <Animate className="mini-card" delay={0.4} duration={1.5} type="fade">
        <FontAwesomeIcon className="icon" icon={icon} />
        <h2 className="secondary-heading">{title}</h2>
        <p
          className="section-para"
          style={{ fontSize: '1.8rem', fontWeight: '100' }}
        >
          {description}
        </p>
      </Animate>
    </>
  );
};

export default MiniCard;

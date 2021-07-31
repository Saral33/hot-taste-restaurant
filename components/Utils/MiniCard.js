import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MiniCard = ({ title, icon, description }) => {
  return (
    <>
      <div className="mini-card">
        <FontAwesomeIcon className="icon" icon={icon} />
        <h2 className="secondary-heading">{title}</h2>
        <p
          className="section-para"
          style={{ fontSize: '1.8rem', fontWeight: '100' }}
        >
          {description}
        </p>
      </div>
    </>
  );
};

export default MiniCard;

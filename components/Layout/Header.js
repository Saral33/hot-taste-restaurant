import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="header__container">
        <span className="primary-text ">
          Enjoy Our <span style={{ color: '#c30001' }}>Hot Taste</span>
        </span>
        <span className="primary-text">In Cheap And Affordable Price</span>
        <button className="btn-primary">Explore More</button>
      </div>
    </header>
  );
};

export default Header;

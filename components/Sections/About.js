import MiniCard from '../Utils/MiniCard';
import {
  faCarrot,
  faClock,
  faShoppingCart,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section className="section__about">
      <h1 className="section-header">Taste Like Never Before</h1>
      <div className="section__contents">
        <p className="section__para" style={{ padding: '0 20rem' }}>
          Yes, you heard it right. We, Hot Taste are here to present you
          experience you have never felt before. Tired of cooking? Don&apos;t
          worry we are here to take care of that. Leave your all cooking duties
          to all. We provide all sort of foods in very cheap price. Give it a
          try and you won&apos;t regret!
        </p>
        <div className="card__container">
          <MiniCard
            title="100% Fresh"
            icon={faCarrot}
            description=" Our foods are always fresh, natural and organic. We use local
          resources so our products are chemical free. Meat products are free of
          fats and less oily. Our products are good for environment and for your
          health too."
          />
          <MiniCard
            title="Fast and steady"
            icon={faClock}
            description=" We don't want you to wait long time for food. 
            We are ready in 20 minutes. Our chefs are trained to serve best quality in short amount of time to ensure your satisfication."
          />
          <MiniCard
            icon={faUtensils}
            title=" 100% delicious"
            description=" We care for your taste too.
             Our best quality chefs are graduated from one of the top culinery university BHMS, Lucerne, Switzerland. Hard to believe?
              Taste once and be fully satisfied. "
          />
          <MiniCard
            icon={faShoppingCart}
            title="Home delievery"
            description="We try to provide many services as we can. We support home delievery.
             Eat at our restaurant or eat at your home, choice is yours.
             Call our local branch in your home city to deliever our food in your door. Delievery is 100% free."
          />
        </div>
      </div>
    </section>
  );
};

export default About;

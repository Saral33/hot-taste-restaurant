import Card from '../Utils/Card';
import { useRouter } from 'next/router';
import Animate from '../Animations/Animate';

const RecipesSection = () => {
  const router = useRouter();

  return (
    <section className="section-recipe">
      <h1 className="section-header">Over 100+ recipes</h1>
      <div className="section__contents">
        <Animate
          type="left-right"
          initx="-80vw"
          finalx={0}
          className="section__para"
          style={{ padding: '0 20rem' }}
        >
          We contain large no of recipes for you to taste. All recipes are made
          with love suitable for all foodies either vegan or gluton. Our quality
          menu has kept newcomers and frequent visitors returning as loyal
          guests.
        </Animate>
        <Animate
          type="left-right"
          initx="80vw"
          finalx={0}
          className="section__para"
          style={{ padding: '0 20rem' }}
        >
          Here are our top three recipes of all time
        </Animate>
        <div className="card__container">
          <Card
            image="/images/duck.jpg"
            title="Chinese Roasted Duck"
            value={4.7}
            reviews={310}
            price={50}
          />
          <Card
            image="/images/steak.jpg"
            title="Beef Steak"
            value={4.2}
            reviews={90}
            price={15}
          />
          <Card
            image="/images/tofu.jpg"
            title="Veg Tofu"
            value={4.3}
            reviews={219}
            price={20}
          />
        </div>
        <div className="align-center">
          <button
            onClick={() => router.push('/recipes')}
            className="btn-primary"
          >
            View More Recipes
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;

import Image from 'next/image';
import { useEffect, useState } from 'react';
import SearchIcon from '../../public/svg/searchicon.svg';

const list = [
  'Amazing Pork Tenderloin in the Slow Cooker',
  'Avocado Breakfast Pizza with Fried Egg',
  'Bacon Double Cheese Burger Salad',
  'Bacon Wrapped Hamburgers',
  'Bacon Wrapped Jalapeno Popper Burgers',
  'Bacon Wrapped Jalapeno Popper Stuffed Chicken',
  'Baked Chicken and Spinach Flautas',
  'Baked Pasta with Spinach and Ricotta',
  'Balsamic Roasted Pork Loin',
  'Barbecue Chicken Pizza',
  'Beef Brisket Pot Roast',
  'Best Pizza Dough Ever',
  'Bowtie Chicken Alfredo',
  'Bronco Burger',
  'Cauliflower Pizza Crust (with BBQ Chicken Pizza)',
  'Cheddar Jalapeno Chicken Burgers with Guacamole',
  'Chicken Parmigiana',
  'Chicken and Dumplings',
  'Chicken with Mustard Cream Sauce',
  'Chinese Roasted Duck',
  'Crock Pot Pesto Ranch Chicken Thighs',
  'Deep Dish Fruit Pizza',
  'Duck Confit Fried Spring Rolls Recipe',
  'Easy Duck Confit',
  'English-Muffin Egg Pizzas',
  'Grilled Chicken with Lemon Basil Pasta',
  'Grilled Turkey Burgers with Cheddar and Smoky Aioli',
  'Jay’s Signature Pizza Crust',
  'Juicy Lucy Burger',
  'No-Knead Pizza Dough',
  'One-pan duck with Savoy cabbage',
  'Pan-Roasted Brined Pork Chop',
  'Pasta Alla Vodka',
  'Pasta Carbonara',
  'Pasta Salad with Tomatoes, Zucchini, and Feta',
  'Pasta with Pesto Cream Sauce',
  'Peach, Basil, Mozzarella, & Balsamic Pizza',
  'Peking Duck',
  'Perfect Cheeseburger ',
  'Perfect roast beef',
  'Pizza Dip',
  'Pizza Potato Skins',
  'Pizza Quesadillas (aka Pizzadillas)',
  'Pork Chops with Apples and Creamy Bacon Cheese Grits',
  'Pork Chops with Pineapple Fried Rice',
  'Pork and Chorizo Chile Burger Recipe',
  'Pork and Poblano Stew',
  'Pork belly roast',
  'Portobello Mushroom Burger',
  'Prosciutto-Wrapped Macaroni and Cheese Cups Recipe',
  'Ranch Style Chicken',
  'Red Thai Duck Curry',
  'Red Wine-Braised Short Ribs',
  'Roast Chicken',
  'Roasted duck breast with plum sauce',
  'Salisbury Steak',
  'Seafood Pasta',
  'Seasoned Turkey Burgers',
  'Shrimp Scampi',
  'Simple, Pan-Fried Pork Chops',
  'Slow Cooker Beef Stroganoff',
  'Slow Cooker Pepper Steak',
  'Slow Cooker Pulled Pork',
  'Spicy Chicken and Pepper Jack Pizza',
  'Spicy Chipotle Turkey Burgers',
  'Sticky duck-dogs with chopped mango slaw &amp; Chinese crisps',
  'Sunday Night Stew',
  'Taco Quesadilla Pizzas',
  'Taco Stuffed Shells',
  'Thai Chicken Pizza with Sweet Chili Sauce',
  'Triple Smoke Burger',
  'Vietnamese Pho: Beef Noodle Soup ',
  'Winter Pasta',
  'Burger',
  'beef',
  'chicken',
  'duck',
  'pasta',
  'pizza',
  'pork',
];

const SearchBox = (props) => {
  const [query, setQuery] = useState('');
  const [suggestion, setSuggestion] = useState([]);

  const searchHandler = (e) => {
    e.preventDefault();
    props.onSearch(query);
    setQuery('');
    setSuggestion([]);
  };

  const searchSuggestionHandler = (val) => {
    props.onSearch(val);
    setSuggestion([]);
    setQuery('');
  };

  useEffect(() => {
    if (query) {
      const timer1 = setTimeout(() => {
        const result = list.filter((x) => x.includes(query));
        setSuggestion(result);
      }, 1000);
      return () => {
        clearTimeout(timer1);
      };
    }
  }, [query]);

  return (
    <>
      <form
        autoComplete="off"
        className="navbar__search"
        onSubmit={searchHandler}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
          placeholder="Search all Recipes,Food,Ingredients....."
        />
        {suggestion.length > 0 && (
          <ul className="autocomplete">
            {suggestion.map((s) => (
              <li
                className="li"
                onClick={() => searchSuggestionHandler(s)}
                key={s}
              >
                {s}
              </li>
            ))}
          </ul>
        )}

        <button className="search-btn">
          <Image src={SearchIcon} width={30} height={30} alt="searchicon" />
        </button>
      </form>
    </>
  );
};

export default SearchBox;

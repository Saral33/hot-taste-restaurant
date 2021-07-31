const pizzadatas = [
  {
    publisher: '101 Cookbooks',
    title: 'Best Pizza Dough Ever',
    source_url: 'http://www.101cookbooks.com/archives/001199.html',
    recipe_id: '47746',
    image_url:
      'http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg',
    social_rank: 100,
    publisher_url: 'http://www.101cookbooks.com',
    description:
      "Peter Reinhart's Napoletana pizza dough recipe. It makes my all-time favorite pizza dough using a delayed-fermentation method.",
  },
  {
    publisher: 'The Pioneer Woman',
    title: 'Deep Dish Fruit Pizza',
    source_url: 'http://thepioneerwoman.com/cooking/2012/01/fruit-pizza/',
    recipe_id: '46956',
    image_url: 'http://forkify-api.herokuapp.com/images/fruitpizza9a19.jpg',
    social_rank: 100,
    publisher_url: 'http://thepioneerwoman.com',
    description:
      'Sugar cookie crust, fluffy cream "sauce" and a beautiful assortment of fruit. Roll it thin into two pizzas or press it all into a sheet pan for a thicker, deep dish dessert.',
  },
  {
    publisher: 'Closet Cooking',
    title: 'Pizza Dip',
    source_url: 'http://www.closetcooking.com/2011/03/pizza-dip.html',
    recipe_id: '35477',
    image_url:
      'http://forkify-api.herokuapp.com/images/Pizza2BDip2B12B500c4c0a26c.jpg',
    social_rank: 99.99999999999994,
    publisher_url: 'http://closetcooking.com',
    description:
      'A layered, hot cheesy dip with all of the great flavours of pizza including pizza sauce, cheese, pepperoni, olives and green peppers.',
  },
  {
    publisher: 'Closet Cooking',
    title: 'Cauliflower Pizza Crust (with BBQ Chicken Pizza)',
    source_url:
      'http://www.closetcooking.com/2013/02/cauliflower-pizza-crust-with-bbq.html',
    recipe_id: '41470',
    image_url:
      'http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg',
    social_rank: 99.9999999999994,
    publisher_url: 'http://closetcooking.com',
    description:
      'Cauliflower makes a surprisingly good pizza crust and it goes really well with a BBQ chicken topping! The cauliflower pizza crust holds together really well and you can easily eat the pizza with your hands!',
  },
  {
    publisher: 'Closet Cooking',
    title: 'Pizza Quesadillas (aka Pizzadillas)',
    source_url:
      'http://www.closetcooking.com/2012/11/pizza-quesadillas-aka-pizzadillas.html',
    recipe_id: '35478',
    image_url:
      'http://forkify-api.herokuapp.com/images/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg',
    social_rank: 99.99999999999835,
    publisher_url: 'http://closetcooking.com',
    description:
      'All of the flavours of a pizza all wrapped up in quesadilla form and topped with even more pizza toppings! Serve the pizzadillas with extra pizza sauce for dipping!',
  },

  {
    publisher: 'The Pioneer Woman',
    title: 'Pizza Potato Skins',
    source_url:
      'http://thepioneerwoman.com/cooking/2013/04/pizza-potato-skins/',
    recipe_id: '6fab1c',
    image_url: 'http://forkify-api.herokuapp.com/images/pizza3464.jpg',
    social_rank: 99.99999999760887,
    description:
      'All the yumminess of potato skins and all the deliciousness of pizza!',
    publisher_url: 'http://thepioneerwoman.com',
  },
  {
    publisher: 'Bon Appetit',
    title: 'No-Knead Pizza Dough',
    source_url:
      'http://www.bonappetit.com/recipes/2012/03/no-knead-pizza-dough',
    recipe_id: '49346',
    image_url:
      'http://forkify-api.herokuapp.com/images/nokneadpizzadoughlahey6461467.jpg',
    social_rank: 99.99999999743466,
    description:
      'Try some appetiting pizza made with only three ingredients to quench your hunger.',
    publisher_url: 'http://www.bonappetit.com',
  },
  {
    publisher: 'Closet Cooking',
    title: 'Taco Quesadilla Pizzas',
    source_url:
      'http://www.closetcooking.com/2012/08/taco-quesadilla-pizza.html',
    recipe_id: '35626',
    image_url:
      'http://forkify-api.herokuapp.com/images/Taco2BQuesadilla2BPizza2B5002B4417a4755e35.jpg',
    social_rank: 99.99999998319973,
    description:
      'Taco meat and cheese stuffed quesadillas made pizza style topped with salsa and even more melted cheese! Just look at all of that ooey, gooey, stringy melted cheese! ',
    publisher_url: 'http://closetcooking.com',
  },
  {
    publisher: 'All Recipes',
    title: 'Jay’s Signature Pizza Crust',
    source_url:
      'http://allrecipes.com/Recipe/Jays-Signature-Pizza-Crust/Detail.aspx',
    recipe_id: '17796',
    image_url: 'http://forkify-api.herokuapp.com/images/237891b5e4.jpg',
    social_rank: 99.99999997246182,
    description:
      'This recipe yields a crust that is soft and doughy on the inside and slightly crusty on the outside. Cover it with your favorite sauce and topping to make a delicious pizza.',
    publisher_url: 'http://allrecipes.com',
  },
  {
    publisher: 'Closet Cooking',
    title: 'Avocado Breakfast Pizza with Fried Egg',
    source_url:
      'http://www.closetcooking.com/2012/07/avocado-breakfast-pizza-with-fried-egg.html',
    recipe_id: '35097',
    image_url:
      'http://forkify-api.herokuapp.com/images/Avocado2Band2BFried2BEgg2BBreakfast2BPizza2B5002B296294dcea8a.jpg',
    social_rank: 99.99999990783806,
    description:
      'A simple, tasty and satisfying breakfast pita pizza topped with mashed avocado and a fried egg. It is almost like salty bacon and creamy avocado were made for each other! ',
    publisher_url: 'http://closetcooking.com',
  },
  {
    publisher: 'Closet Cooking',
    title: 'Thai Chicken Pizza with Sweet Chili Sauce',
    source_url:
      'http://www.closetcooking.com/2012/02/thai-chicken-pizza-with-sweet-chili.html',
    recipe_id: '35635',
    image_url:
      'http://forkify-api.herokuapp.com/images/Thai2BChicken2BPizza2Bwith2BSweet2BChili2BSauce2B5002B435581bcf578.jpg',
    social_rank: 99.99999990065892,
    description:
      'A Thai inspired pizza with a sweet chili sauce base topped with chicken, red peppers, peanuts and plenty of fresh herbs! ',
    publisher_url: 'http://closetcooking.com',
  },
  {
    publisher: 'Two Peas and Their Pod',
    title: 'Peach, Basil, Mozzarella, & Balsamic Pizza',
    source_url:
      'http://www.twopeasandtheirpod.com/peach-basil-mozzarella-balsamic-pizza/',
    recipe_id: '54491',
    image_url:
      'http://forkify-api.herokuapp.com/images/peachbasilpizza6c7de.jpg',
    social_rank: 99.99999980232263,
    description:
      'Fresh peaches, basil ribbons, ricotta cheese, a drizzle of honey, fresh mozzarella all on a buttery flatbread. The perfect summer pizza! ',
    publisher_url: 'http://www.twopeasandtheirpod.com',
  },
  {
    publisher: 'Real Simple',
    title: 'English-Muffin Egg Pizzas',
    source_url:
      'http://www.realsimple.com/food-recipes/browse-all-recipes/english-muffin-egg-pizzas-10000000663044/index.html',
    recipe_id: '38812',
    image_url: 'http://forkify-api.herokuapp.com/images/pizza_300d938bd58.jpg',
    social_rank: 99.99999978548222,
    description:
      'Protein-rich. Meat-free. Ready in less than 10 minutes. This genius trick for using up leftover hard-boiled eggs proves so delicious, we often find ourselves making a batch solely for the purpose of preparing these mini-pizzas. ',
    publisher_url: 'http://realsimple.com',
  },

  {
    publisher: 'My Baking Addiction',
    title: 'Spicy Chicken and Pepper Jack Pizza',
    source_url:
      'http://www.mybakingaddiction.com/spicy-chicken-and-pepper-jack-pizza-recipe/',
    recipe_id: '0fb8f4',
    image_url: 'http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg',
    social_rank: 99.99999927351223,
    description:
      'Spicy Chicken and Pepper Jack pizza made with Sargento Pepper Jack cheese is the perfect flatbread pizza for game night – it’s a real guy pleaser, and a Jamie pleaser too.',
    publisher_url: 'http://www.mybakingaddiction.com',
  },
  {
    publisher: 'My Baking Addiction',
    title: 'Barbecue Chicken Pizza',
    source_url:
      'http://www.mybakingaddiction.com/barbecue-chicken-pizza-recipe/',
    recipe_id: 'a723e8',
    image_url:
      'http://forkify-api.herokuapp.com/images/BBQChickenPizza3e2b.jpg',
    social_rank: 99.9999968917598,
    description:
      'Whether you’re looking for a quick lunch or a great pizza to accompany your Friday night movie, this Barbecue Chicken Pizza is a great twist for a weekend classic or for any great events',
    publisher_url: 'http://www.mybakingaddiction.com',
  },
];
const pastaData = [
  {
    publisher: 'The Pioneer Woman',
    title: 'Pasta with Pesto Cream Sauce',
    source_url:
      'http://thepioneerwoman.com/cooking/2011/06/pasta-with-pesto-cream-sauce/',
    recipe_id: '47025',
    image_url: 'http://forkify-api.herokuapp.com/images/pestoa0e7.jpg',
    social_rank: 100,
    publisher_url: 'http://thepioneerwoman.com',
    description:
      'An indescribably delicious pasta dish brimming with basil flavor and peppered with fresh diced tomatoes. ',
  },
  {
    publisher: 'The Pioneer Woman',
    title: 'Shrimp Scampi',
    source_url:
      'http://thepioneerwoman.com/cooking/2011/04/16-minute-meal-shrimp-scampi/',
    recipe_id: '47032',
    image_url: 'http://forkify-api.herokuapp.com/images/scampibf5a.jpg',
    social_rank: 100,
    publisher_url: 'http://thepioneerwoman.com',
    description:
      "Our favorite circa 1981 pasta dish! (Or was it 1982?) Either way, with butter, garlic, lemon, and shrimp, you really can't go wrong with this classic (and very quick and easy) dinner.",
  },

  {
    publisher: 'The Pioneer Woman',
    title: 'Pasta Alla Vodka',
    source_url:
      'http://thepioneerwoman.com/cooking/2008/12/friday-night-dinner-pasta-alla-vodka/',
    recipe_id: '47275',
    image_url: 'http://forkify-api.herokuapp.com/images/pastaallavodkaa870.jpg',
    social_rank: 99.99999999999636,
    publisher_url: 'http://thepioneerwoman.com',
    description:
      'How can we adequately describe to you our love for this tomato-cream-based dish? We are raging tomato-cream-sauce fiend anyway, but this one … there’s just something about it. It’s mild, and each bite has a really clean finish, a perfect ending.',
  },
  {
    publisher: 'The Pioneer Woman',
    title: 'Seafood Pasta',
    source_url: 'http://thepioneerwoman.com/cooking/2012/03/seafood-pasta/',
    recipe_id: '46943',
    image_url: 'http://forkify-api.herokuapp.com/images/seafoodpasta5075.jpg',
    social_rank: 99.99999999999329,
    publisher_url: 'http://thepioneerwoman.com',
    description:
      'Shrimp and scallops, seared in butter and oil and baked in a foil package with pasta and a simple tomato sauce. A shot of warm cream at the end sends it over the top!',
  },

  {
    publisher: 'Chow',
    title: 'Prosciutto-Wrapped Macaroni and Cheese Cups Recipe',
    source_url:
      'http://www.chow.com/recipes/30113-prosciutto-wrapped-macaroni-and-cheese-cups',
    recipe_id: '9adcbc',
    image_url:
      'http://forkify-api.herokuapp.com/images/30113_prosciutto_macaroni_cheese_cups_6204a83.jpg',
    social_rank: 99.99999999987332,
    publisher_url: 'http://www.chow.com',
    description:
      'Few dishes are more comforting than gooey macaroni and cheese hot out of the oven. But we’ve managed to make it even more appealing by serving it in individual prosciutto cups topped with crispy panko. These mac ’n’ cheese cups are an ideal party appetizer or midafternoon snack. Or for a satisfying meal, serve them alongside some sautéed zucchini.',
  },
  {
    publisher: 'Closet Cooking',
    title: 'Taco Stuffed Shells',
    source_url: 'http://www.closetcooking.com/2012/02/taco-stuffed-shells.html',
    recipe_id: '35628',
    image_url:
      'http://forkify-api.herokuapp.com/images/Taco2BStuffed2BShells2B5002B7249e76e46ea.jpg',
    social_rank: 99.99999999852123,
    publisher_url: 'http://closetcooking.com',
    description:
      'Jumbo pasta shells stuffed with a taco inspired mixture of beef, corn, black beans and goat cheese that is covered in cheese and baked in salsa.',
  },
  {
    publisher: 'The Pioneer Woman',
    title: 'Pasta Carbonara',
    source_url: 'http://thepioneerwoman.com/cooking/2012/05/pasta-carbonara/',
    recipe_id: '46922',
    image_url: 'http://forkify-api.herokuapp.com/images/carbonara2f55.jpg',
    social_rank: 99.99999999592087,
    publisher_url: 'http://thepioneerwoman.com',
    description:
      'Classic bacon-and-egg pasta with the yummy addition of peas. Nothing better on earth. Otherwise known as a bowl of pure joy.',
  },
  {
    publisher: '101 Cookbooks',
    title: 'Winter Pasta',
    source_url: 'http://www.101cookbooks.com/archives/winter-pasta-recipe.html',
    recipe_id: '47991',
    image_url:
      'http://forkify-api.herokuapp.com/images/winter_pasta_recipebee6.jpg',
    social_rank: 99.9999999572553,
    publisher_url: 'http://www.101cookbooks.com',
    description:
      "Winter pasta dishes are especially satisfying. Braised meats, slow-simmered sauces, and plenty of cheese: It's all here, in these  pasta dishes perfect for chilly weather. ",
  },
  {
    publisher: 'The Pioneer Woman',
    title: 'Grilled Chicken with Lemon Basil Pasta',
    source_url:
      'http://thepioneerwoman.com/cooking/2010/07/grilled-chicken-with-lemon-basil-pasta/',
    recipe_id: '47118',
    image_url:
      'http://forkify-api.herokuapp.com/images/4814287904_bb43e024c9_be8a9.jpg',
    social_rank: 99.99999991847115,
    publisher_url: 'http://thepioneerwoman.com',
    description:
      'A scrumptious creamy lemon pasta flavored with basil and served with grilled chicken. Delish! Amazing! Outstanding',
  },
  {
    publisher: 'The Pioneer Woman',
    title: 'Pasta Salad with Tomatoes, Zucchini, and Feta',
    source_url:
      'http://thepioneerwoman.com/cooking/2011/03/pasta-salad-with-tomatoes-zucchini-and-feta/',
    recipe_id: '47041',
    image_url:
      'http://forkify-api.herokuapp.com/images/5566512470_9e98939ab3_z2766.jpg',
    social_rank: 99.99999855322939,
    publisher_url: 'http://thepioneerwoman.com',
    description:
      'A cool, refreshing, throw-together pasta salad. Add grilled shrimp, chicken, or beef to turn it into a main dish dinner for everyone',
  },

  {
    publisher: 'Two Peas and Their Pod',
    title: 'Baked Pasta with Spinach and Ricotta',
    source_url:
      'http://www.twopeasandtheirpod.com/baked-pasta-with-spinach-and-ricotta/',
    recipe_id: '054a70',
    image_url:
      'http://forkify-api.herokuapp.com/images/SpinachBakedShells53ded.jpg',
    social_rank: 99.9999924531229,
    publisher_url: 'http://www.twopeasandtheirpod.com',
    description:
      'Baked Pasta with Spinach and Ricotta –  smothered small pasta shells with ricotta, spinach, and marinara sauce. Similar to stuffed shells, minus the work of stuffing, and in baked pasta form! ',
  },
];
const burgerData = [
  {
    publisher: "What's Gaby Cooking",
    title: 'Cheddar Jalapeno Chicken Burgers with Guacamole',
    source_url:
      'http://whatsgabycooking.com/cheddar-jalapeno-chicken-burgers-with-guacamole/',
    recipe_id: '9eb23b',
    image_url:
      'http://forkify-api.herokuapp.com/images/CheddarJalapenoChickenBurgerswithGuacamole4fdb.jpg',
    social_rank: 99.99999999998766,
    publisher_url: 'http://whatsgabycooking.com',
    description:
      'We are obsessed with these Cheddar Jalapeño Chicken Burgers.  how could we not be? They are decked out with sour cream, GUACAMOLE and salsa. Shouldn’t all burgers be decked out like this? We think so.',
  },
  {
    publisher: 'Closet Cooking',
    title: 'Bacon Wrapped Jalapeno Popper Burgers',
    source_url:
      'http://www.closetcooking.com/2012/05/bacon-wrapped-jalapeno-popper-burgers.html',
    recipe_id: '35119',
    image_url:
      'http://forkify-api.herokuapp.com/images/Jalapeno2BPopper2BBurgers2B5002B186755e06e2b.jpg',
    social_rank: 99.9999999996593,
    publisher_url: 'http://closetcooking.com',
    description:
      'These burgers have all of the flavours of jalapeno poppers with their jalapeno and cream cheese filling and their bacon wrapping and coat of melted cheddar cheese.',
  },
  {
    publisher: 'Simply Recipes',
    title: 'Portobello Mushroom Burger',
    source_url:
      'http://www.simplyrecipes.com/recipes/portobello_mushroom_burger/',
    recipe_id: '36765',
    image_url:
      'http://forkify-api.herokuapp.com/images/portabellomushroomburgera300x20048d12011.jpg',
    social_rank: 99.9999903941977,
    publisher_url: 'http://simplyrecipes.com',
    description:
      'Savory grilled portobello mushrooms, onions, spinach, mayo, and sun-dried tomatoes are piled onto a fluffy bun to create a mouthwatering burger experience that happens to be vegetarian. You won’t even miss the meat!',
  },
  {
    publisher: 'All Recipes',
    title: 'Bacon Wrapped Hamburgers',
    source_url:
      'http://allrecipes.com/Recipe/Bacon-Wrapped-Hamburgers/Detail.aspx',
    recipe_id: '2296',
    image_url: 'http://forkify-api.herokuapp.com/images/84316728b5.jpg',
    social_rank: 99.99934315039117,
    publisher_url: 'http://allrecipes.com',
    description:
      'This is great! The bacon makes the hamburgers so tender! Extra cheesey, extra tasty. This is power of bacon.',
  },
  {
    publisher: 'All Recipes',
    title: 'Spicy Chipotle Turkey Burgers',
    source_url:
      'http://allrecipes.com/Recipe/Spicy-Chipotle-Turkey-Burgers/Detail.aspx',
    recipe_id: '30009',
    image_url: 'http://forkify-api.herokuapp.com/images/6770736050.jpg',
    social_rank: 99.99744134898533,
    publisher_url: 'http://allrecipes.com',
    description:
      'With a chipotle chile pepper, mozzarella cheese and other seasonings, you will absolutely love this spicy, yet flavorful, burger!',
  },
  {
    publisher: 'Chow',
    title: 'Juicy Lucy Burger',
    source_url:
      'http://www.chow.com/recipes/29721-juicy-lucy-burger-aka-jucy-lucy',
    recipe_id: 'e370f7',
    image_url:
      'http://forkify-api.herokuapp.com/images/29721_RecipeImage_620x413_juicy_lucy_burger380a3.jpg',
    social_rank: 99.99999999999454,
    publisher_url: 'http://www.chow.com',
    description:
      'A favorite of Minnesotans! The famous Juicy Lucy! Mmmm. So good. You MUST use American cheese on this to achieve the juiciness in the middle! I like sauteed mushrooms and onions on mine!',
  },
  {
    publisher: 'Closet Cooking',
    title: 'Bacon Double Cheese Burger Salad',
    source_url:
      'http://www.closetcooking.com/2012/04/bacon-double-cheese-burger-salad.html',
    recipe_id: '35108',
    image_url:
      'http://forkify-api.herokuapp.com/images/Bacon2BDouble2BCheese2BBurger2BSalad2B5002B61668d04f9e9.jpg',
    social_rank: 99.99516239055096,
    publisher_url: 'http://closetcooking.com',
    description:
      'All of the flavours of a bacon cheeseburger in a salad with a warm bacon vinaigrette! Do you love burgers but want something a little lighter? How about a bacon cheeseburger salad with all of the flavours of a bacon cheeseburger in salad form. This salad starts out with ground beef that is seasoned with common burger patty ingredients and condiments including worcestershire sauce, ketchup and mustard. The salad continues with other common burger topping including lettuce, tomato, onion and pickle and of course plenty of cheese and bacon along with a warm bacon vinaigrette!',
  },
  {
    publisher: 'Chow',
    title: 'Pork and Chorizo Chile Burger Recipe',
    source_url:
      'http://www.chow.com/recipes/29725-pork-and-chorizo-chile-burger',
    recipe_id: '333fee',
    image_url:
      'http://forkify-api.herokuapp.com/images/29725_pork_chorizo_chile_burger_620ee6b.jpg',
    social_rank: 99.88157381229496,
    publisher_url: 'http://www.chow.com',
    description:
      'Ground pork sometimes needs a little help in the flavor department, and the addition of spicy Mexican chorizo does the job here. Top these burgers with grilled chiles and a grilled avocado mash; wash it all down with a refreshing beer cocktail.',
  },
  {
    publisher: 'Epicurious',
    title: 'Grilled Turkey Burgers with Cheddar and Smoky Aioli',
    source_url:
      'http://www.epicurious.com/recipes/food/views/Grilled-Turkey-Burgers-with-Cheddar-and-Smoky-Aioli-354289',
    recipe_id: 'b59411',
    image_url: 'http://forkify-api.herokuapp.com/images/3542898869.jpg',
    social_rank: 99.73704671630435,
    publisher_url: 'http://www.epicurious.com',
    description:
      'A simple Moroccan-spiced aioli is mixed in with the ground turkey to keep the burgers moist and give them tons of flavor. Smoked paprika is available in the spice aisle of most supermarkets.',
  },
  {
    publisher: 'Chow',
    title: 'Perfect Cheeseburger ',
    source_url: 'http://www.chow.com/recipes/28912-perfect-cheeseburger',
    recipe_id: '814b6f',
    image_url:
      'http://forkify-api.herokuapp.com/images/28912_RecipeImage_620x413_perfect_cheeseburger23063.jpg',
    social_rank: 99.28873678555222,
    publisher_url: 'http://www.chow.com',
    description:
      'Calling it the Perfect Cheeseburger is pretty bold, but we stand by it. Our burger is big, juicy, and seasoned right. Try it to never regret',
  },
  {
    publisher: 'All Recipes',
    title: 'Bronco Burger',
    source_url: 'http://allrecipes.com/Recipe/Bronco-Burger/Detail.aspx',
    recipe_id: '4860',
    image_url: 'http://forkify-api.herokuapp.com/images/44294659e.jpg',
    social_rank: 99.25569062357094,
    publisher_url: 'http://allrecipes.com',
    description:
      'The manly man burger (not for wimps), great for NFL tailgating. Awesome for taste, perfect for craziness',
  },
  {
    publisher: 'All Recipes',
    title: 'Seasoned Turkey Burgers',
    source_url:
      'http://allrecipes.com/Recipe/Seasoned-Turkey-Burgers/Detail.aspx',
    recipe_id: '28063',
    image_url: 'http://forkify-api.herokuapp.com/images/248661216f.jpg',
    social_rank: 97.29922986115052,
    publisher_url: 'http://allrecipes.com',
    description:
      "These burgers are great on the 'que' or indoors. Made with lettuce, tomato, avocado, sprouts, onion, mayonnaise, mustard, ketchup, etc.",
  },
  {
    publisher: 'Epicurious',
    title: 'Triple Smoke Burger',
    source_url:
      'http://www.epicurious.com/recipes/food/views/Triple-Smoke-Burger-365889',
    recipe_id: 'bc7c70',
    image_url: 'http://forkify-api.herokuapp.com/images/365889d458.jpg',
    social_rank: 96.33050550178616,
    publisher_url: 'http://www.epicurious.com',
    description:
      'Anything grilled could be described as smoky, but our cover burger is a multi layered masterpiece thanks to chipotle chiles mingled with adobo, smoked paprika, and bacon. Seared avocado makes it almost too good to be true.',
  },
];
const beefData = [
  {
    publisher: 'Steamy Kitchen',
    title: 'Vietnamese Pho: Beef Noodle Soup ',
    source_url:
      'http://www.steamykitchen.com/271-vietnamese-beef-noodle-soup-pho.html',
    recipe_id: '48364',
    image_url:
      'http://forkify-api.herokuapp.com/images/vietnamesephorecipe2200x150b8fd.jpg',
    social_rank: 99.99999999999105,
    publisher_url: 'http://www.steamykitchen.com',
    description:
      'Authentic Pho recipe from award-winning cookbook author and foremost expert in Vietnamese cuisine, Andrea Nguyen! With a broth that’s light yet so full of flavor, it’s infused with spices like cinnamon, star anise and cardamom. Utterly addictive!',
  },
  {
    publisher: 'Bon Appetit',
    title: 'Red Wine-Braised Short Ribs',
    source_url:
      'http://www.bonappetit.com/recipes/2011/10/red-wine-braised-short-ribs',
    recipe_id: '49640',
    image_url:
      'http://forkify-api.herokuapp.com/images/Red_Wine_Braised_Short_Ribs_646a119.jpg',
    social_rank: 99.99999999993693,
    publisher_url: 'http://www.bonappetit.com',
    description:
      "These short ribs are even better when they're allowed to sit overnight. Perfect for dinner with wine and chill",
  },
  {
    publisher: 'All Recipes',
    title: 'Slow Cooker Beef Stroganoff',
    source_url:
      'http://allrecipes.com/Recipe/Slow-Cooker-Beef-Stroganoff-I/Detail.aspx',
    recipe_id: '28878',
    image_url: 'http://forkify-api.herokuapp.com/images/569446a2c8.jpg',
    social_rank: 99.9999999998939,
    publisher_url: 'http://allrecipes.com',
    description:
      'The most amazing Beef Stroganoff you will ever have! Golden seared juicy beef strips smothered in an incredible sour cream mushroom gravy. Never suffer through dry chewy beef or bland Stroganoff sauce again – this recipe delivers!!',
  },
  {
    publisher: 'The Pioneer Woman',
    title: 'Sunday Night Stew',
    source_url: 'http://thepioneerwoman.com/cooking/2013/01/sunday-night-stew/',
    recipe_id: '46876',
    image_url: 'http://forkify-api.herokuapp.com/images/stew26d82.jpg',
    social_rank: 99.9999999998818,
    publisher_url: 'http://thepioneerwoman.com',
    description:
      'Piping hot, flavorful, gorgeous, thick stew is perfect with mashed potatoes on Sunday night...or any night! You would absolutely love it.',
  },
  {
    publisher: 'All Recipes',
    title: 'Slow Cooker Pepper Steak',
    source_url:
      'http://allrecipes.com/Recipe/Slow-Cooker-Pepper-Steak/Detail.aspx',
    recipe_id: '29037',
    image_url: 'http://forkify-api.herokuapp.com/images/4962449cd4.jpg',
    social_rank: 99.99999999928846,
    publisher_url: 'http://allrecipes.com',
    description:
      "Very tender and flavorful, this recipe is one of our customer's favorites. It's great to make ahead of time in the slow cooker and then serve over rice, egg noodles, or chow mein.",
  },
  {
    publisher: 'All Recipes',
    title: 'Salisbury Steak',
    source_url: 'http://allrecipes.com/Recipe/Salisbury-Steak/Detail.aspx',
    recipe_id: '27381',
    image_url: 'http://forkify-api.herokuapp.com/images/3760476bc7.jpg',
    social_rank: 99.99999999894384,
    publisher_url: 'http://allrecipes.com',
    description:
      'Juicy seasoned beef patties drowning in an outrageously delicious Gravy, this Salisbury Steak recipe has been tried and loved by customers from all over the world… now it’s your turn!',
  },
  {
    publisher: 'Jamie Oliver',
    title: 'Perfect roast beef',
    source_url:
      'http://www.jamieoliver.com/recipes/beef-recipes/perfect-roast-beef',
    recipe_id: 'c826a0',
    image_url:
      'http://forkify-api.herokuapp.com/images/389_1_1350903718_lrg99fc.jpg',
    social_rank: 99.99999999626466,
    publisher_url: 'http://www.jamieoliver.com',
    description:
      "A simple way to roast topside of beef to ensure it's super succulent, every time",
  },
  {
    publisher: 'Simply Recipes',
    title: 'Beef Brisket Pot Roast',
    source_url: 'http://www.simplyrecipes.com/recipes/beef_brisket_pot_roast/',
    recipe_id: '35779',
    image_url:
      'http://forkify-api.herokuapp.com/images/brisketpotroast300x2006fee3cda.jpg',
    social_rank: 99.9999999951628,
    publisher_url: 'http://simplyrecipes.com',
    description:
      "Beef Brisket cooked as a pot roast couldn't be tastier. Cooked in the oven with onions and garlic all afternoon until it becomes fall-apart tender. The leftovers freeze beautifully, too!",
  },
];
const duckData = [
  {
    publisher: 'Temple of Thai',
    title: 'Red Thai Duck Curry',
    source_url: 'https://www.templeofthai.com/recipes/duck_curry.php',
    recipe_id: '47057',
    image_url:
      'http://forkify-api.herokuapp.com/images/5399320435_139099bda0_o0815.jpg',
    social_rank: 99.98871073808353,
    publisher_url: 'https://www.templeofthai.com',
    description:
      'Red Curry with Roasted Duck is popular on Thai restaurant menus especially in the West. It is not the kind of dish that Thai people would usually make at home but is a good choice for a special occasion such as a dinner party',
  },
  {
    publisher: 'BBC Good Food',
    title: 'Sticky duck-dogs with chopped mango slaw &amp; Chinese crisps',
    source_url:
      'http://www.bbcgoodfood.com/recipes/2972683/sticky-duckdogs-with-chopped-mango-slaw-and-chines',
    recipe_id: '963cb1',
    image_url: 'http://forkify-api.herokuapp.com/images/2972683_MEDIUM0018.jpg',
    social_rank: 99.9174644578394,
    publisher_url: 'http://www.bbcgoodfood.com',
    description:
      'Shredded hoisin duck in hot dog rolls with crunchy Asian slaw and pancakes baked into tortilla-style homemade chips',
  },
  {
    publisher: 'BBC Good Food',
    title: 'Roasted duck breast with plum sauce',
    source_url:
      'http://www.bbcgoodfood.com/recipes/251627/roasted-duck-breast-with-plum-sauce',
    recipe_id: '5360d9',
    image_url: 'http://forkify-api.herokuapp.com/images/251627_MEDIUMca08.jpg',
    social_rank: 99.15602993986455,
    publisher_url: 'http://www.bbcgoodfood.com',
    description:
      'This easy yet impressive recipe makes a stylish main course for a special occasion. Plum sauce adds flavor from outer world',
  },
  {
    publisher: 'Chow',
    title: 'Duck Confit Fried Spring Rolls Recipe',
    source_url:
      'http://www.chow.com/recipes/30255-duck-confit-fried-spring-rolls',
    recipe_id: '865499',
    image_url:
      'http://forkify-api.herokuapp.com/images/30255_RecipeImage_620x413_duck_confit_rolls_31241.jpg',
    social_rank: 94.91791694460558,
    publisher_url: 'http://www.chow.com',
    description:
      'This recipe morphs the classic Chinese pairing of roasted duck with plum sauce into a crispy spring roll appetizer. The filling is made by mixing shredded duck confit meat with sautéed mushrooms, carrots, onions, and sweet water chestnuts. It’s wrapped in thin rice-paper wrappers, deep-fried, and served with a hoisin-plum dipping sauce.',
  },
  {
    publisher: 'Simply Recipes',
    title: 'Easy Duck Confit',
    source_url: 'http://www.simplyrecipes.com/recipes/easy_duck_confit/',
    recipe_id: '36253',
    image_url:
      'http://forkify-api.herokuapp.com/images/ghettodunkconfit300x200b3cf5d07.jpg',
    social_rank: 91.15279652003629,
    publisher_url: 'http://simplyrecipes.com',
    description:
      "Gently cured duck legs bathed in their own fat and slowly cooked to falling-off-the-bone perfection. Then the skin is crisped in a pan or oven, giving you the sinful combination of silky meat and crackling skin. It’ll roll your eyes back it's so good.",
  },
  {
    publisher: 'All Recipes',
    title: 'Peking Duck',
    source_url: 'http://allrecipes.com/Recipe/Peking-Duck/Detail.aspx',
    recipe_id: '24865',
    image_url: 'http://forkify-api.herokuapp.com/images/946502e948.jpg',
    social_rank: 74.30182519698845,
    publisher_url: 'http://allrecipes.com',
    description:
      'This duck recipe made with love is served with plum sauce as well as a fruit sauce. This is actually a short-cut version but it is fantastic.',
  },
  {
    publisher: 'BBC Good Food',
    title: 'One-pan duck with Savoy cabbage',
    source_url:
      'http://www.bbcgoodfood.com/recipes/6679/onepan-duck-with-savoy-cabbage',
    recipe_id: '628dae',
    image_url: 'http://forkify-api.herokuapp.com/images/6679_MEDIUM2698.jpg',
    social_rank: 72.52735075250145,
    publisher_url: 'http://www.bbcgoodfood.com',
    description:
      "Duck breast is perfect for entertaining - it's delicious to cook, readily available, yet not something you eat every day",
  },
  {
    publisher: 'BBC Good Food',
    title: 'Chinese Roasted Duck',
    source_url: 'https://www.bbcgoodfood.com/recipes/chinese-roast-duck',
    recipe_id: '628dap',
    image_url:
      'https://images.unsplash.com/photo-1611489142329-5f62cfa43e6e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9hc3RlZCUyMGR1Y2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    social_rank: 72.52735075250111,
    publisher_url: 'http://www.bbcgoodfood.com',
    description:
      'Whole crispy roasted duck with maltose marinade makes for an impressive centrepiece. The cavity is stuffed with star anise, spring onion and ginger.',
  },
];
const porkData = [
  {
    publisher: 'The Pioneer Woman',
    title: 'Pork Chops with Pineapple Fried Rice',
    source_url:
      'http://thepioneerwoman.com/cooking/2012/03/pork-chops-with-pineapple-fried-rice/',
    recipe_id: '46946',
    image_url: 'http://forkify-api.herokuapp.com/images/pineappled39c.jpg',
    social_rank: 99.99999999999999,
    publisher_url: 'http://thepioneerwoman.com',
    description:
      'The Cast of Characters in this recipe: Pork chops, onion, soy sauce, honey, rice wine vinegar, Sriracha, pimentoes, frozen peas, and rice. Oh. And pineapple to make you happy.',
  },
  {
    publisher: 'All Recipes',
    title: 'Slow Cooker Pulled Pork',
    source_url:
      'http://allrecipes.com/Recipe/Slow-Cooker-Pulled-Pork/Detail.aspx',
    recipe_id: '29057',
    image_url: 'http://forkify-api.herokuapp.com/images/586964c174.jpg',
    social_rank: 99.99999999999972,
    publisher_url: 'http://allrecipes.com',
    description:
      "Pork simmered in root beer makes all the difference. Topped with your favorite BBQ sauce, it's sure to bring rave reviews.",
  },
  {
    publisher: 'The Pioneer Woman',
    title: 'Simple, Pan-Fried Pork Chops',
    source_url:
      'http://thepioneerwoman.com/cooking/2009/10/simple-pan-fried-pork-chops/',
    recipe_id: '47198',
    image_url:
      'http://forkify-api.herokuapp.com/images/3981696877_a807240bf248e7.jpg',
    social_rank: 99.99999999832066,
    publisher_url: 'http://thepioneerwoman.com',
    description:
      "These are the simplest, most delightful little numbers. They're ready in 5 to 10 minutes, flavorful, and exceedingly pleasing.",
  },
  {
    publisher: 'The Pioneer Woman',
    title: 'Pork Chops with Apples and Creamy Bacon Cheese Grits',
    source_url:
      'http://thepioneerwoman.com/cooking/2011/08/pork-chops-with-apples-and-creamy-bacon-cheese-grits/',
    recipe_id: '47003',
    image_url: 'http://forkify-api.herokuapp.com/images/porkchops3435.jpg',
    social_rank: 99.99999995828892,
    publisher_url: 'http://thepioneerwoman.com',
    description:
      'The most ridiculously delectable cheese grits you will ever taste',
  },
  {
    publisher: 'Jamie Oliver',
    title: 'Pork belly roast',
    source_url:
      'http://www.jamieoliver.com/recipes/pork-recipes/pork-belly-roast',
    recipe_id: 'c9733a',
    image_url:
      'http://forkify-api.herokuapp.com/images/407_1_1350550087_lrg3fa4.jpg',
    social_rank: 99.99999994773876,
    publisher_url: 'http://www.jamieoliver.com',
    description:
      'An absolute classic – the best pork belly recipes let this wonderful cut of meat speak for itself.',
  },
  {
    publisher: 'Bon Appetit',
    title: 'Pan-Roasted Brined Pork Chop',
    source_url:
      'http://www.bonappetit.com/recipes/2013/01/pan-roasted-brined-pork-chop',
    recipe_id: '48831',
    image_url:
      'http://forkify-api.herokuapp.com/images/panroastedbrinedporkchop646090d.jpg',
    social_rank: 99.99999806227025,
    publisher_url: 'http://www.bonappetit.com',
    description:
      'Brining these pork chops makes them moist, tender, and seasoned throughout, and the sugar helps create a dark, caramelized sheen.',
  },
  {
    publisher: 'All Recipes',
    title: 'Amazing Pork Tenderloin in the Slow Cooker',
    source_url:
      'http://allrecipes.com/Recipe/Amazing-Pork-Tenderloin-In-The-Slow-Cooker/Detail.aspx',
    recipe_id: '999',
    image_url: 'http://forkify-api.herokuapp.com/images/241912f6cd.jpg',
    social_rank: 99.9999978833207,
    publisher_url: 'http://allrecipes.com',
    description:
      'This will melt in your mouth! This pork tenderloin soaks up the yummy juices as it cooks. Make sure to serve up the au jus on the side - its amazing! You will love it!',
  },
  {
    publisher: 'Simply Recipes',
    title: 'Pork and Poblano Stew',
    source_url: 'http://www.simplyrecipes.com/recipes/pork_and_poblano_stew/',
    recipe_id: '36753',
    image_url:
      'http://forkify-api.herokuapp.com/images/porkpoblanostewa300x20050b88cb3.jpg',
    social_rank: 99.99999772186027,
    publisher_url: 'http://simplyrecipes.com',
    description:
      'Hearty fall stew with pork shoulder, roasted poblano chiles, chipotle, onions, sweet potatoes, and corn.',
  },
  {
    publisher: 'All Recipes',
    title: 'Balsamic Roasted Pork Loin',
    source_url:
      'http://allrecipes.com/Recipe/Balsamic-Roasted-Pork-Loin/Detail.aspx',
    recipe_id: '2715',
    image_url: 'http://forkify-api.herokuapp.com/images/2196416db9.jpg',
    social_rank: 99.99998950698912,
    publisher_url: 'http://allrecipes.com',
    description:
      'A zesty, yet simple meal with an olive oil and balsamic vinegar marinade. A crowd pleaser!',
  },
];

const randomPriceGenerator = () => {
  return (Math.random() * 100 + 30).toFixed(2);
};

const newPizzaData = pizzadatas.map((p) => ({
  ...p,
  category: 'pizza',
  price: randomPriceGenerator(),
}));

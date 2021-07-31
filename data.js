const chickenData = [
  {
    publisher: 'Closet Cooking',
    title: 'Bacon Wrapped Jalapeno Popper Stuffed Chicken',
    source_url:
      'http://www.closetcooking.com/2012/11/bacon-wrapped-jalapeno-popper-stuffed.html',
    recipe_id: '35120',
    image_url:
      'http://forkify-api.herokuapp.com/images/Bacon2BWrapped2BJalapeno2BPopper2BStuffed2BChicken2B5002B5909939b0e65.jpg',
    social_rank: 100,
    publisher_url: 'http://closetcooking.com',
    description:
      'Juicy chicken breasts wrapped in crispy bacon and stuffed full, to overflowing, with melted cheese and jalapeno peppers!',
  },
  {
    publisher: 'The Pioneer Woman',
    title: 'Roast Chicken',
    source_url: 'http://thepioneerwoman.com/cooking/2012/08/roast-chicken/',
    recipe_id: '46906',
    image_url: 'http://forkify-api.herokuapp.com/images/roastchicken2feab.jpg',
    social_rank: 100,
    publisher_url: 'http://thepioneerwoman.com',
    description:
      'Buttery, lemony, rosemary-y...and delicious. Is rosemary-y a word? There’s nothing simpler than roast chicken. And there are few things more delicious.',
  },
  {
    publisher: 'The Pioneer Woman',
    title: 'Chicken Parmigiana',
    source_url:
      'http://thepioneerwoman.com/cooking/2009/10/chicken-parmigiana/',
    recipe_id: '47194',
    image_url:
      'http://forkify-api.herokuapp.com/images/4024225151_5f477f16caabf9.jpg',
    social_rank: 100,
    publisher_url: 'http://thepioneerwoman.com',
    description:
      'Rich, flavorful, and totally satisfying! Break out the good Parmesan for this one. It’s the right thing to do.',
  },
  {
    publisher: 'Healthy Delicious',
    title: 'Baked Chicken and Spinach Flautas',
    source_url:
      'http://www.healthy-delicious.com/2012/03/baked-chicken-and-spinach-flautas/',
    recipe_id: '0c2e90',
    image_url:
      'http://forkify-api.herokuapp.com/images/205xNxchickenandspinachflautas2296f.jpg.pagespeed.ic.RNEW9wsRU.jpg',
    social_rank: 100,
    publisher_url: 'http://www.healthy-delicious.com',
    description:
      'The ultra-crispy chicken taquitos are baked instead of fried, so they have fewer calories. This recipe is a crowd favorite and has been pinned over a million times!',
  },
  {
    publisher: 'The Pioneer Woman',
    title: 'Chicken and Dumplings',
    source_url:
      'http://thepioneerwoman.com/cooking/2010/12/chicken-and-dumplings/',
    recipe_id: '47070',
    image_url:
      'http://forkify-api.herokuapp.com/images/5258969545_eeb0c35356_o7eee.jpg',
    social_rank: 99.99999999999993,
    publisher_url: 'http://thepioneerwoman.com',
    description:
      "Comfort food like no one's business. Slightly brothy, slightly creamy, with the most delectable dumplings. Yum.",
  },
  {
    publisher: 'The Pioneer Woman',
    title: 'Chicken with Mustard Cream Sauce',
    source_url:
      'http://thepioneerwoman.com/cooking/2012/02/chicken-with-mustard-cream-sauce/',
    recipe_id: '46947',
    image_url: 'http://forkify-api.herokuapp.com/images/chickenmustarde587.jpg',
    social_rank: 99.99999999999929,
    publisher_url: 'http://thepioneerwoman.com',
    description:
      'Pan sauces are  life, and this tangy mustard sauce makes chicken (or pork chops...or medium rare steak) delectable. The addition of brandy gives it a decidedly different edge.',
  },
  {
    publisher: 'The Pioneer Woman',
    title: 'Ranch Style Chicken',
    source_url:
      'http://thepioneerwoman.com/cooking/2009/01/ranch-style-chicken/',
    recipe_id: '47264',
    image_url:
      'http://forkify-api.herokuapp.com/images/3214830317_3470607769fad0.jpg',
    social_rank: 99.99999999999457,
    publisher_url: 'http://thepioneerwoman.com',
    description:
      'This yummy chicken dish is very, very cowboy-friendly, make no mistake about it. It’s hearty, exceedingly flavorful, and not the least bit fancy. Isn’t that what cowboy food is all about?',
  },
  {
    publisher: 'The Pioneer Woman',
    title: 'Bowtie Chicken Alfredo',
    source_url:
      'http://thepioneerwoman.com/cooking/2012/12/bowtie-chicken-alfredo/',
    recipe_id: '46882',
    image_url: 'http://forkify-api.herokuapp.com/images/chickenalfredoc9c5.jpg',
    social_rank: 99.99999999993057,
    publisher_url: 'http://thepioneerwoman.com',
    description:
      'A super-quick skillet version of chicken alfredo pasta. Delicious and oh, so easy. So whynot give it a try?',
  },
  {
    publisher: 'Picky Palate',
    title: 'Crock Pot Pesto Ranch Chicken Thighs',
    source_url:
      'http://picky-palate.com/2012/09/20/pesto-ranch-crock-pot-chicken-thighs/',
    recipe_id: '484d98',
    image_url:
      'http://forkify-api.herokuapp.com/images/CrockPotPestoRanchChickenThighs1text1300x248ca0b.jpg',
    social_rank: 99.99999999941502,
    publisher_url: 'http://picky-palate.com',
    description:
      'This crock pot chicken thighs recipe is perfect for dinner!  Pesto Ranch Crock Pot Chicken Thighs are an easy slow cooked chicken dinner with just a few ingredients! So flavorful with minimal effort.',
  },
];

const randomPriceGenerator = () => {
  return (Math.random() * 100 + 40).toFixed(2);
};

const newPorkData = chickenData.map((p) => ({
  ...p,
  category: 'chicken',
  price: randomPriceGenerator(),
}));

const Product = require('./model/productModel');
const dbConnect = require('./config/dbconnect');
dbConnect();
const importData = async () => {
  try {
    await Product.insertMany(newPorkData);
    console.log('Data entered in DB');
    process.exit();
  } catch (e) {
    console.error(`error: ${e}`);
    process.exit(1);
  }
};

importData();

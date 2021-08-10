module.exports = {
  env: {
    MONGO_URI:
      'mongodb+srv://social:social123@cluster0.jijmg.mongodb.net/social?retryWrites=true&w=majority',
    BASE_URL: 'http://localhost:3000',
  },
  images: {
    domains: ['forkify-api.herokuapp.com', 'images.unsplash.com'],
  },
};

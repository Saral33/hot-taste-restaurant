const mongoose = require('mongoose');

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(console.log('DB connected'))
    .catch((err) => console.error(err));
};
module.exports = dbConnect;

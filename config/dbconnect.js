const mongoose = require('mongoose');

const dbConnect = () => {
  mongoose
    .connect(
      'mongodb+srv://social:social123@cluster0.jijmg.mongodb.net/social?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      }
    )
    .then(console.log('DB connected'))
    .catch((err) => console.error(err));
};
module.exports = dbConnect;

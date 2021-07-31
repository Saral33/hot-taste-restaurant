const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  publisher: {
    type: String,
  },
  title: {
    type: String,
    required: [true, 'Product must have title'],
  },
  source_url: {
    type: String,
  },
  image_url: {
    type: String,
    required: [true, 'Product must have image'],
  },
  publisher_url: {
    type: String,
  },
  description: {
    type: String,
    required: [true, 'Product must have description'],
  },
  price: {
    type: Number,
    required: [true, 'Product must have price'],
  },
  category: {
    type: String,
    required: [true, 'Product must have category'],
  },
  avgrating: {
    type: Number,
    default: 0,
  },
  numReviews: {
    type: Number,
    default: 0,
  },
  sales: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      review: {
        type: String,
        required: true,
      },
    },
  ],
});

const Product =
  mongoose.models.product || mongoose.model('product', productSchema);

module.exports = Product;

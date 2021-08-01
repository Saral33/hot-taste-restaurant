const Product = require('../model/productModel');
import asyncHandler from '../utils/catchAsync';
import ApiFeatures from '../utils/featuresQuery';
import ErrorHandler from '../utils/errorHandler';

const getAllProducts = asyncHandler(async (req, res) => {
  const limit = 9; //Always return 9 perpage

  const apiFeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .sort();

  const count = (await apiFeatures.query).length;
  let products = await apiFeatures.query;
  apiFeatures.pagination(limit);
  products = await apiFeatures.query;

  res.status(200).json({
    count,
    products,
  });
});

const getSingleProduct = asyncHandler(async (req, res, next) => {
  const id = req.query.id;
  const product = await Product.findById(id);
  if (!product) {
    return next(new ErrorHandler('No product found for this ID', 404));
  }
  res.status(200).json({
    product,
  });
});

const getAllCategories = asyncHandler(async (req, res, next) => {
  const products = await Product.find({}).sort('price');

  const categories = [];

  products.map((product) =>
    categories.push({ category: product.category, image: product.image_url })
  );

  const result = Array.from(new Set(categories.map((a) => a.category))).map(
    (category) => {
      return categories.find((a) => a.category === category);
    }
  );

  res.json(result);
});

module.exports = { getAllProducts, getSingleProduct, getAllCategories };

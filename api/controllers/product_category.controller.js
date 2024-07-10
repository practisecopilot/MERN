import ProductCategory from '../models/product_category.model.js';
import { errorHandler } from '../utils/error.js';

export const createProductCategory = async (req, res, next) => {
  try {
    const productCategory = await ProductCategory.create(req.body);
    return res.status(201).json(productCategory);
  } catch (error) {
    next(error);
  }
};

export const deleteProductCategory = async (req, res, next) => {
  const productCategory = await ProductCategory.findById(req.params.id);

  if (!productCategory) {
    return next(errorHandler(404, 'Product Category not found!'));
  }

  if (req.user.id !== productCategory.userRef) {
    return next(errorHandler(401, 'You can only delete your own product category!'));
  }

  try {
    await ProductCategory.findByIdAndDelete(req.params.id);
    res.status(200).json('Product Category has been deleted!');
  } catch (error) {
    next(error);
  }
};

export const updateProductCategory = async (req, res, next) => {
  const productCategory = await ProductCategory.findById(req.params.id);
  if (!productCategory) {
    return next(errorHandler(404, 'Product Category not found!'));
  }
  if (req.user.id !== productCategory.userRef) {
    return next(errorHandler(401, 'You can only update your own Product Category!'));
  }

  try {
    const updatedProductCategory = await ProductCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedProductCategory);
  } catch (error) {
    next(error);
  }
};

export const getProductCategory = async (req, res, next) => {
  try {
    const productCategory = await ProductCategory.findById(req.params.id);
    if (!productCategory) {
      return next(errorHandler(404, 'Product Category not found!'));
    }
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const getProductCategories = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex) || 0;
    
    /*let offer = req.query.offer;

    if (offer === undefined || offer === 'false') {
      offer = { $in: [false, true] };
    }

    let furnished = req.query.furnished;

    if (furnished === undefined || furnished === 'false') {
      furnished = { $in: [false, true] };
    }

    let parking = req.query.parking;

    if (parking === undefined || parking === 'false') {
      parking = { $in: [false, true] };
    }*/

    let type = req.query.type;

    if (type === undefined || type === 'all') {
      type = { $in: ['single', 'multiple'] };
    }

    const searchTerm = req.query.searchTerm || '';

    const sort = req.query.sort || 'createdAt';

    const order = req.query.order || 'desc';

    const productCategory = await ProductCategory.find({
      name: { $regex: searchTerm, $options: 'i' },
      type,
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json(productCategory);
  } catch (error) {
    next(error);
  }
};

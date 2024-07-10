import mongoose from 'mongoose';

const productCategorySchema = new mongoose.Schema(
  {
    prdCatName: {
      type: String,
      required: true,
    },
    prdCatDesc: {
      type: String,
      required: true,
    },
    prdCatImgUrl: {
      type: Array,
      required: true,
    },
    prdCatStatus: {
      type: Boolean,
      required: true,
    },  
  },
  { timestamps: true }
);

const ProductCategory = mongoose.model('product_category', productCategorySchema);

export default ProductCategory;

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    prdName: {
      type: String,
      required: true,
    },
    prdDesc: {
      type: String,
      required: true,
    },
    prdCatId: {
      type: String,
      required: true,
    },
    prdAttrId: {
      type: String,
      required: true,
    },
    prdImgUrls: {
      type: Array,
      required: true,
    },
    prdRegularPrice: {
      type: Number,
      required: true,
    },
    prdDiscountPrice: {
      type: Number,
      required: true,
    },
    prdType: {
      type: String,
      required: true,
    },
    prdUserRef: {
      type: String,
      required: true,
    },
    prdStatus: {
      type: Boolean,
      required: true,
    },  
  },
  { timestamps: true }
);

const Product = mongoose.model('product', productSchema);

export default Product;

import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema(
  {
    cartProductId: {
      type: String,
      required: true,
    },
    cartPrice: {
      type: String,
      required: true,
    },
    attrValAttrId: {
      type: String,
      required: true,
    },
    attrValStatus: {
      type: Boolean,
      required: true,
    },  
  },
  { timestamps: true }
);

const Cart = mongoose.model('cart', cartSchema);

export default Cart;

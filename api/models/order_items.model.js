import mongoose from 'mongoose';

const orderItemsSchema = new mongoose.Schema(
  {
    ordItmOrderId: {
      type: String,
      required: true,
    },
    ordItmItem: {
      type: String,
      required: true,
    },
    ordItmPrice: {
      type: String,
      required: true,
    },
    ordItmStatus: {
      type: Boolean,
      required: true,
    },  
  },
  { timestamps: true }
);

const OrderItems = mongoose.model('order_items', orderItemsSchema);

export default OrderItems;

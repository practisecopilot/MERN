import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    ordItemsCount: {
      type: Number,
      required: true,
    },
    ordTotal: {
      type: Number,
      required: true,
    },
    ordStatus: {
      type: Boolean,
      required: true,
    },  
  },
  { timestamps: true }
);

const Order = mongoose.model('order', orderSchema);

export default Order;

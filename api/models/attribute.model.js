import mongoose from 'mongoose';

const attributeSchema = new mongoose.Schema(
  {
    attrName: {
      type: String,
      required: true,
    },
    attrStatus: {
      type: Boolean,
      required: true,
    },  
  },
  { timestamps: true }
);

const Attribute = mongoose.model('attribute', attributeSchema);

export default Attribute;

import mongoose from 'mongoose';

const attributeValueSchema = new mongoose.Schema(
  {
    attrValName: {
      type: String,
      required: true,
    },
    attrValValue: {
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

const AttributeValue = mongoose.model('attribute_value', attributeValueSchema);

export default AttributeValue;

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const macAddressSchema = new Schema(
  {
    alias: { type: 'String', required: true },
    mac: { type: 'String', required: true },
  },
  { collection: 'macAddresses' },
);

export default mongoose.model('MacAddress', macAddressSchema);

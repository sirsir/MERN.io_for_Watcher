import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const windowTitleSchema = new Schema(
  {
    title: { type: 'String', required: true },
    category: { type: 'String', required: true },
  },
  { collection: 'windowTitles' },
);

export default mongoose.model('windowTitle', windowTitleSchema);

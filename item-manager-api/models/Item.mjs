import mongoose from 'mongoose';

const { Schema } = mongoose;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: [true, 'must provide a name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'description can not be more than 500 characters'],
  },
  price: {
    type: Number,
    required: [true, 'item price must be provided'],
  },
  priceVAT: {
    type: Number,
    required: [true, 'item price must be provided'],
  },
  code: {
    type: String,
    required: [true, 'item code must be provided'],
    match: [
      /^[a-zA-Z0-9]{10}$/,
      'item code must be 10 characters long and contain only letters and digits',
    ],
    // unique: true,
  },
});

export default mongoose.model('Item', ItemSchema);

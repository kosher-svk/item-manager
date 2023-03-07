import { connect } from 'mongoose';

const connectDB = async (uri) => {
  try {
    await connect(uri);
    console.log('Connected to db ...');
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;

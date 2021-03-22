//Config
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
//Libraries
const mongoose = require('mongoose');

//Connect to MongoDB database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_TEST_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Successful connection to MongoDB');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB;

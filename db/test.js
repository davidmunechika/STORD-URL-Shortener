//Config
require('dotenv').config();
//Libraries
const mongoose = require('mongoose');
console.log(process.env.MONGODB_TEST_URI);
console.log(process.env.NODE_ENV);
//Connect to MongoDB database
const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://davidmunechika:jEWzE3ZJiVyDu1Je@cluster0.uxvp7.mongodb.net/urlTestDatabase?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    console.log('Successful connection to MongoDB');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB;

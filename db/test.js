//Config
require('dotenv').config({ path: './test.env' });
//Libraries
const mongoose = require('mongoose');

//Connect to MongoDB testing database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_TEST_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Successful connection to MongoDB (Test database)');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB;

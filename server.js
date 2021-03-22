//Config
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

//Libraries
const express = require('express');
const indexRouter = require('./routes/index');
const cors = require('cors');
const connectDB = require('./db/mongoose');

//Connect to MongoDB
if (process.env.NODE_ENV !== 'test') {
  connectDB();
}

//Setup server
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(indexRouter);

module.exports = app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

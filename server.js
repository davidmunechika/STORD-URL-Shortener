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

//Allow requests from frontend
app.use(
  cors({
    origin: process.env.BASE_URL,
  })
);
//Allow json to be sent in request body
app.use(express.json());
//Use index api routes
app.use(indexRouter);

//Start up server
module.exports = app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

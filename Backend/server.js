const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routers/user.router');
const cors=require("cors");


const app = express();

mongoose.connect('mongodb://127.0.0.1/Assignment8', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(cors())
app.use(bodyParser.json());
app.use('/user', userRouter);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

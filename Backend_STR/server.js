const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const signupHandler = require('./Backend_STR/controllers/signupController');
const verifyRoute = require('./Backend_STR/routes/verifyRoute');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"));

app.post('/signup', signupHandler);
app.use('/', verifyRoute);

app.listen(5000, () => console.log("Server running on port 5000"));
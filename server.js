require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const offerRoutes = require('./routes/offerRoutes');

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use('/offers', offerRoutes);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 4000}`);
});

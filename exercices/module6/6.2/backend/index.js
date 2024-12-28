require('dotenv').config();
const express = require("express");
const personsRoutes = require('./routes/persons');
const Person = require('./mongo');

const PORT = 3001;
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.set("Access-Control-Allow-Methods", "*");
  next();
});

app.use('/persons', personsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
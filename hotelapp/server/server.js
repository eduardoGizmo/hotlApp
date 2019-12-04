const express = require('express');
const app = express();
const parser = require('boby-parser');

const cors = require('cors');
app.use(parser.json());
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('hotel');
  const guestsCollection = db.collection('guests');
  const guestsRouter = createRouter(guestsCollection);
  app.use('/api/guests', guestsRouter);
})
.catch(console.err);

app.listen(3000, function() {
  console.log(`Listening on port ${this.address().port }`);
})

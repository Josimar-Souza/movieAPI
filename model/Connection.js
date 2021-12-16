const { MongoClient } = require('mongodb');

const DB_NAME = 'MoviesDB';
const MONGO_URL = 'mongodb://127.0.0.1:27017';
const MONGO_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

const connection = async () => {
  try {
    if (!db) {
      db =  (await MongoClient.connect(MONGO_URL, MONGO_OPTIONS)).db(DB_NAME);
    }
  
    return db;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connection;
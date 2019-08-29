const mongoose = require('mongoose');

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/user', {
  useNewUrlParser: true,
  promiseLibrary: global.Promise
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.log(`connect to mongodb failed：${error}`);
});

db.on('open', () => {
  console.log('connect to mongodb success');
});

// db.collection('user').insertOne({"name":"lisi"});
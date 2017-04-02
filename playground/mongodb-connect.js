// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log(`Cant connect to mongodb server - ${err}`);
  }
  console.log('Connected to mongodb server');

  /*
  db.collection('Todos').insertOne({
    text: 'Eat lunch',
    completed: false
  }, (err, res) => {
    if (err) {
      return console.log(`Unable to insert into db - ${err}`);
    }
    console.log(JSON.stringify(res.ops, undefined, 2));
  });
  */

  db.collection('Users').insertOne({
    name: 'Zac',
    age: 19,
    location: 'Irvine'
  }, (err, res) => {
    if (err) {
      return console.log(err);
    }
    console.log(res.ops[0]._id.getTimestamp());
  })
  
  db.close();
});

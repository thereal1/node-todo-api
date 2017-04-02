const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log(`Cant connect to mongodb server - ${err}`);
  }
  console.log('Connected to mongodb server');
  /*
  db.collection('Todos').find({
    _id: new ObjectID('58dfa35815a4728b9558441c')
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log(`Couldnt fetch ${err}`);
  });
  */
  /*
  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to count Todos, ', err);
  });
  */

  db.collection('Users').find({name: 'Zac'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log(`Couldnt find the user, got and error - ${err}`);
  });

  // db.close();
});

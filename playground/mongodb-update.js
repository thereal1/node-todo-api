const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log(`Cant connect to mongodb server - ${err}`);
  }
  console.log('Connected to mongodb server');

  /*
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('58e125804442fab4c5ad2992')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });
  */

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58dfaa322163548c99db0e2b')
  }, {
    $set: {
      name: 'E.Sweatshirt'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });

  // db.close();
});

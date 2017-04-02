const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log(`Cant connect to mongodb server - ${err}`);
  }
  console.log('Connected to mongodb server');

  // delete all with {text: 'Eat lunch'}
  // res just tells you if the deletion was successful and how many you deleted
  /*
  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
    console.log(res);
  });
  */

  // delete one with {text: 'Eat lunch'}
  // res just tells you if the deletion was successful and how many you deleted
  /*
  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
    console.log(res);
  });
  */

  // deleteOne with {completed: false}
  // res tells you how many you have deleted and shows the object you have deleted
  /*
  db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    console.log(res);
  });
  */

  /*
  // promise not necessary
  db.collection('Users').deleteMany({name: 'Zac'})
  */

  // promise not necessary
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('58e1286dafd238b55b059170')
  });

  // db.close();
});

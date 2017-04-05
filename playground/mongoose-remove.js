const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// .remove({}), removes everything that matches
Todo.remove({}).then((res) => {
  console.log(res);
});

//.findOneAndRemove finds the first occurance that matches then removes it
// returns the data
Todo.findOneAndRemove({name: 'zac'}).then((todo) => {

});

Todo.findByIdAndRemove('asdasd2').then((todo) => {
  
});

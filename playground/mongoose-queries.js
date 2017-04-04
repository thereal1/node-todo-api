const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

const id = '58e3b1016f7fc11b1662d7e6';

/*
if (!ObjectID.isValid(id)) {
  console.log('invalid object id');
}
*/
/*
Todo.find({
  _id: id
}).then((todos) => {
  console.log('todos ', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('todo ', todo);
});
*/
/*
Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('id not found');
  }
  console.log('todo by id ', todo);
}).catch((e) => console.log(e));
*/

User.findById('58e14bfbee6cb28abc425943').then((user) => {
  if (!user) {
    return console.log('invalid id');
  }
  console.log('User found ', user);
}).catch((e) => console.log(e));

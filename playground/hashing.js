const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

let hashPassword = '$2a$10$Oj2X7MLMrWcRk87PIeEHr.lQk3V68lscUUxjPxzhYo6lnYaqXBc0W';

bcrypt.compare(password, hashPassword, (err, res) => {
  console.log(res);
});

// var data = {
//   id: 10
// };
//
// const token = jwt.sign(data, '123secret');
// console.log(token);
//
// const decodedToken = jwt.verify(token, '123secret');
// console.log('decoded - ', decodedToken);

// const message = 'I am user number 3';
// let hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// let data = {
//   id: 4
// };
// let token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//   // not manipulated
// }

const mongoose = require('mongoose');

mongoose.promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports.mongoose;

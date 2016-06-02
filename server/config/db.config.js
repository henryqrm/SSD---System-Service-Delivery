'use strict';
var db_string = process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME || 'mongodb://127.0.0.1/trabalh'; // Este é local

var mongoose = require('mongoose').connect(db_string);

var db = module.exports = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));

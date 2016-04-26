'use strict';
var db_string = 'mongodb://127.0.0.1/trabalho'; // Este é local

var mongoose = require('mongoose').connect(db_string);

var db = module.exports = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));

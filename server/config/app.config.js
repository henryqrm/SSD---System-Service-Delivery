'use strict';
var express = require('express'); // Modulo express (WebService)
var cors = require('cors');
var app = module.exports = express();
var bodyParser = require('body-parser');
var path = require('path');

app.listen(process.env.PORT || 5000, function() {
    console.log("http://127.0.0.1:5000");
}); // Porta de escuta

app.set('superSecret', 'ssd-system-service-delivery');


app.use('/', express.static(path.resolve(__dirname, '../public')));

// CORS
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
// var allowCors = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin','127.0.0.1:3000' ,'127.0.0.1:5000', 'ssd-system-service-delivery.herokuapp.com', '*'); // libera dominio
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); // Verbos
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     res.header('Access-Control-Allow-Credentials', 'true');
//
//     next();
// };
// app.use(allowCors);

app.use(cors());

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({
    extended: true
}));

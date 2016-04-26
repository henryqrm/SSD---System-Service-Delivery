'use strict';
// const jwt = require('jsonwebtoken');
// const app = require('../config/app.config.js');
const db = require('../model/model.person.js');

exports.login = function(email, password, callback) {
    db.Person.findOne({
            'email': email
        },
        function(err, person) {
            if (err || person === null || person === undefined) {
                callback({
                    error: 'Usuário ou senha invalido'
                });
            } else {
                if (person.password === password) {
                    callback(person);
                } else {
                    callback({
                        error: 'Usuário ou senha invalido'
                    });
                }
            }
        });
};

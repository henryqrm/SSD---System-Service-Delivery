/**
 * Populate DB with sample data on server start
 */
'use strict';
var db = require('../model/model.person.js');
exports.init = function() {
    // Cria administrador
    db.Person.findOne({
        'email': 'admin@admin.com.br'
    }, function(err, person) {
        if (!err) {
            if (!person) {
                new db.Person({
                    name: {
                        first: 'Admin',
                        last: ''
                    },
                    email: 'admin@admin.com.br',
                    password: '123456',
                    enable: true, // Allow admin
                    role: 'admin',
                    create_at: Date()
                }).save(function(error, person) {
                    if (error) {
                        console.log("Não foi possivel salvar o usuario");
                    } else {
                        console.log(person);
                        console.log("Admin create");
                    }
                });
            }
        }
    });
    // Cria provider
    db.Person.findOne({
        'email': 'provider@provider.com.br'
    }, function(err, person) {
        if (!err) {
            if (!person) {
                new db.Person({
                    name: {
                        first: 'provider',
                        last: ''
                    },
                    email: 'provider@provider.com.br',
                    password: '123456',
                    enable: true, // Allow admin
                    role: 'provider',
                    create_at: Date()
                }).save(function(error, person) {
                    if (error) {
                        console.log("Não foi possivel salvar o usuario");
                    } else {
                        console.log(person);
                        console.log("provider create");
                    }
                });
            }
        }
    });
    // Cria user
    db.Person.findOne({
        'email': 'user@user.com.br'
    }, function(err, person) {
        if (!err) {
            if (!person) {
                new db.Person({
                    name: {
                        first: 'user',
                        last: ''
                    },
                    email: 'user@user.com.br',
                    password: '123456',
                    enable: true, // Allow user
                    role: 'user',
                    create_at: Date()
                }).save(function(error, person) {
                    if (error) {
                        console.log("Não foi possivel salvar o usuario");
                    } else {
                        console.log(person);
                        console.log("user create");
                    }
                });
            }
        }
    });

    db.Person.findOne({
        'email': 'Henrique@Henrique.com.br'
    }, function(err, person) {
        if (!err) {
            if (!person) {
                new db.Person({
                    name: {
                        first: 'Henrique',
                        last: ''
                    },
                    email: 'Henrique@Henrique.com.br',
                    password: '123456',
                    enable: false, // Allow user
                    role: 'user',
                    create_at: Date()
                }).save(function(error, person) {
                    if (error) {
                        console.log("Não foi possivel salvar o usuario");
                    } else {
                        console.log(person);
                        console.log("user create");
                    }
                });
            }
        }
    });
};

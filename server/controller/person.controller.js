'use strict';
var db = require('../model/model.person.js');
var validator = require('validator');

exports.list = function(callback) {
    db.Person.find({}, function(error, persons) {
        if (error) {
            callback({
                error: 'Não foi possivel retornar os usuarios'
            });
        } else {
            callback(persons);
        }
    });
};

exports.person = function(id, callback) {
    db.Person.findById(id, function(error, person) {
        if (error || person === null || person === undefined) {
            callback({
                error: 'Não foi possivel retornar o usuario'
            });
        } else {
            callback(person);
        }
    });
};

exports.create = function(person, callback) {
    if (!validator.isEmail(person.email)) {
        callback({
            error: 'email_incorrect'
        });
    } else if (person.password === '') {
        callback({
            error: 'no_password'
        });
    } else {
        db.Person.findOne({
            'email': person.email
        }, function(err, resp) {
            if (err || resp === null || resp === undefined) {
                person.create_at = Date();
                new db.Person(person).save(function(error, person) {
                    if (error) {
                        callback({
                            error: 'unexpected'
                        });
                    } else {
                        callback(person);
                    }
                });
            } else {
                callback({
                    error: 'registred'
                });
            }
        });
    }

};

exports.delete = function(id, callback) {
    db.Person.findById(id, function(error, person) {
        if (error || person === null || person === undefined) {
            callback({
                error: 'Não foi possivel retornar o usuario'
            });
        } else {
            person.remove(function(error) {
                if (!error) {
                    callback({
                        response: 'Usuário excluido com sucesso'
                    });
                } else {
                    callback({
                        response: 'Erro ao excluir usuário'
                    });
                }
            });
        }
    });
};

'use strict';
var db = require('../model/model.person.js');

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
exports.create = function(callback) {
    new db.Person({
        name: {
            first: 'Henrique',
            last: 'Rodrigues'
        },
        cpf: '115.173.626-01',
        email: 'email',
        password: '12345',
        enable: true, // Allow admin
        create_at: Date()
    }).save(function(error, person) {
        if (error) {
            callback({
                error: 'Não foi possivel salvar o usuario'
            });
        } else {
            callback(person);
        }
    });
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

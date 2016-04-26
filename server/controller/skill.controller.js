'use strict';
var db = require('../model/model.person.js');


exports.getUserSkill = function (id, callback) {
    db.Person.find(id, function (error, person) {
        if (error || person === null || person === undefined) {
            callback({
                error: 'Não foi possivel retornar o usuario'
            });
        } else {
            callback(person.skills);
        }
    });
};
exports.userRegister = function(id, skill, callback) {
    db.Person.findById(id, function(error, person) {
        if (error || person === null || person === undefined) {
            callback({
                error: 'Não foi possivel retornar o usuario'
            });
        } else {
            person.skills.push(skill);
            person.save(function(err, person) {
                if (error) {
                    callback({
                        error: 'Não foi possivel salvar o usuario'
                    });
                } else {
                    callback(person);
                }
            });
        }
    });
};

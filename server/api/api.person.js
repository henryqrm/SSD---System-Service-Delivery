'use strict';
var personController = require('../controller/person.controller');
var express = require('express');
var validator = require('validator');
var router = module.exports = express.Router();
router
    .get('/api/persons', function(req, res) {
        personController.list(function(persons) {
            res.json(persons);
        });
    })
    .get('/api/person/:id', function(req, res) {
        var id = validator.trim(validator.escape(req.param('id')));
        personController.person(id, function(person) {
            res.json(person);
        });
    })
    .post('/api/person', function(req, res) {
        personController.create(req.body, function(person) {
            res.json(person);
        });
    })
    .delete('/api/person/:id', function(req, res) {
        var id = validator.trim(validator.escape(req.param('id')));
        personController.delete(id, function(data) {
            res.json(data);
        });
    })
    .put('/api/person/:id', function(req, res) {
        var id = validator.trim(validator.escape(req.param('id')));
        res.json({response: "Não implementado para " + id});
    });

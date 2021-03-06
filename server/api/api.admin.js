'use strict';
const db = require('../model/model.person.js');
const modelContract = require('../model/model.contract.js');
const express = require('express');
const router = module.exports = express.Router();
router
    .post('/api/enable/user', function(req, res) {
        let id = req.body.id_user;
        db.Person.findOneAndUpdate({
            '_id': id
        }, {
            enable: true
        }, {
            upsert: false,
            new: true
        }, function(err, doc) {
            if (err) {
                res.json("Não foi possivel habilitar");
            }
            res.json(doc);
        });
    })
    .post('/api/enable/contract', function(req, res) {
        let id = req.body.id_contract;
        console.log(modelContract);
        modelContract.Contract.findOneAndUpdate({
            '_id': id
        }, {
            enable: true
        }, {
            upsert: false,
            new: true
        }, function(err, doc) {
            if (err) {
                res.json("Não foi possivel habilitar");
            }
            res.json(doc);
        });
    })
    .get('/api/enable/contract', function(req, res) {
        modelContract.Contract.find({
            enable: false
        }, function(err, doc) {
            if (err) {
                res.json("Erro ao pegar contratos");
            }
            res.json(doc);
        });
    })
    .get('/api/enable/user', function(req, res) {
        db.Person.find({
            enable: false
        }, function(err, doc) {
            if (err) {
                res.json("Erro ao pegar usuários");
            }
            res.json(doc);
        });
    });

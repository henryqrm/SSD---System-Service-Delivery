'use strict';
let contractCtrl = require('../controller/contract.controller');
let express = require('express');
let router = module.exports = express.Router();
console.log(contractCtrl);
router
    .get('/api/contracts', function(req, res) {
        contractCtrl.list(function(data) {
            res.json(data);
        });
    })
    .post('/api/contracts/user', function(req, res) {
        let id = req.body.id_client;
        contractCtrl.listClient(id, function(data) {
            res.json(data);
        });
    })
    .post('/api/contracts/provider', function(req, res) {
        let id = req.body.id_provider;
        contractCtrl.listProvider(id, function(data) {
            res.json(data);
        });
    })
    .post('/api/contract', function(req, res) {
        contractCtrl.create(req.body, function(data) {
            res.json(data);
        });
    });

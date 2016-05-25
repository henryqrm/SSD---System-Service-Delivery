'use strict';
const db = require('../model/model.contract.js');

exports.enable = function (idContract, callback) {
  db.Contract.findOneAndUpdate({'_id':idContract}, {upsert:false,new:true}, function(err, data){
      if (err) {
          callback(err);
      }else{
        callback(data);
      }
    });
};

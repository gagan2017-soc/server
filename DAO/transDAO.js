"use strict";

var Models = require("../Models/transcation");

const getTransaction = criteria =>
  new Promise((resolve, reject) => {
    Models.find(criteria)
      .then(client => resolve(client))
      .catch(err => reject(err));
  });

const createTranscation = objToSave =>
  new Promise((resolve, reject) => {
    new Models(objToSave)
      .save()
      .then(client => resolve(client))
      .catch(err => {reject(err);
         console.log(err);
      });
  });

const updateTransaction = (criteria, dataToSet, options) =>
  new Promise((resolve, reject) => {
    options.lean = true;
    options.new = true;
    Models.findOneAndUpdate(criteria, dataToSet, options)
      .then(client => resolve(client))
      .catch(err => reject(err));
  });

const deleteTransaction = criteria =>
  new Promise((resolve, reject) => {
    Models.findOneAndRemove(criteria)
      .exec()
      .then(client => resolve(client))
      .catch(err => reject(err));
  });

/*   const getUser=
  new Promise((resolve, reject) => {
    Models.find((error,data))
      .exec()
      .then(client => resolve(client))
      .catch(err => reject(err));
  }); */

 /* const getUser=
  new promise((req, res) => {
    Models.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  }); */

module.exports = {
  updateTransaction: updateTransaction,
  createTranscation: createTranscation,
  deleteTransaction: deleteTransaction,
  getTransaction: getTransaction
};
// const async = require("async");
const config = require("../Utilities/config").config;
const transDAO = require('../DAO/transDAO');
const MD5 = require('md5');
let transcations = require('../Models/transcation');

/* API to register new user */
let createTranscation = async (req, res) => {
  if (!req.body.narration || !req.body.entrydt) {
    res.status(401).json({message:'Parameters are missing'})
  } else {
    try {
      let criteria = {
        narration: req.body.narration      } 
      const checktran = await transDAO.getTransaction(criteria);
      if (checktran && checktran.length==1) {
        res.status(401).json({message:'Transaction already Exists'})
      } else {
        let transdate = {
          entrydt: req.body.entrydt ? req.body.entrydt : "",
          narration: req.body.narration ? req.body.narration : "",
          clearingdt: req.body.clearingdt ? req.body.clearingdt : "",
          amount: req.body.amount,
          mode: req.body.mode,
          flatno: req.body.flatno,
          frommonth: req.body.frommonth,
          fromyear: req.body.fromyear,
          tomonth: req.body.tomonth,
          toyear: req.body.toyear,
          receiptgen:req.body.receiptgen,
          receiptnumber:req.body.receiptnumber

        };
        const addTran = await transDAO.createTranscation(transdate);
        // console
        if (addTran) {
          res.status(200).json({message:'Transcation registered successfully!'})
        } else {
          res.status(403).json({message:"Something went wrong"});
        }
      }
    } catch (error) {
      res.status(404).json({message:"Something went wrong",error:error});
    }
  }
};

let updateTranscation = async (req, res) => {
  if (!req.body.flatno || !req.body.entrydt) {
    res.status(401).json({message:'Parameters are missing'})
  } else {
    try {
      let criteria = {
        flatno: req.body.flatno      } 
      const checktran = await transDAO.getTransaction(criteria);
      /* if (checktran && checktran.length==1) {
        res.status(401).json({message:'Transaction already Exists'})
      } else { */
        let transdate = {
          entrydt: req.body.entrydt ? req.body.entrydt : "",
          narration: req.body.narration ? req.body.narration : "",
          clearingdt: req.body.clearingdt ? req.body.clearingdt : "",
          amount: req.body.amount,
          mode: req.body.mode,
          flatno: req.body.flatno,
          frommonth: req.body.frommonth,
          fromyear: req.body.fromyear,
          tomonth: req.body.tomonth,
          toyear: req.body.toyear,
          receiptgen:req.body.receiptgen,
          receiptnumber:req.body.receiptnumber

        };
        if (checktran && checktran.length==1) {
        const addTran = await transDAO.updateTransaction(criteria,transdate, {upsert: true} );
        // console
        if (addTran) {
          res.status(200).json({message:'Transcation registered successfully!'})
        } else {
          res.status(403).json({message:"Something went wrong"});
        }
      }
    } catch (error) {
      res.status(404).json({message:"Something went wrong",error:error});
    }
  }
};
let getAllTranscation = async (req, res) => {
  transcations.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
} ;
  module.exports = {
    createTranscation: createTranscation,
    getAllTranscation: getAllTranscation,
    updateTranscation :updateTranscation
};
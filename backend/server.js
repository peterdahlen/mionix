const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
//const expressValidator = require('express-validator');
const mongoose = require('mongoose');
//const Signature = require('./models/signature.js')
const app = express();
const port = 4000;
const url = 'mongodb+srv://admin:mionix@cluster0-7tvm2.mongodb.net/test?retryWrites=true';

mongoose.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connection established to', url);
    }
   });

var mionixSchema = new mongoose.Schema({
name: String,
variant: String,
slug: String,
shopifyID: Number,
color: String
  });

var descriptionTextSchema = new mongoose.Schema({
  prod_name: String,
  description_01: String,
  description_01_caps: String,
  description_02: String,
  description_02_caps: String,
  description_03: String,
  description_03_caps: String
    });

var Product = mongoose.model('Product', mionixSchema);
var DescriptionText = mongoose.model('Description', descriptionTextSchema);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', function(req, res) {
    res.json('you did it');
  });

app.get('/api/descriptions/:name', function(req, res) {
  console.log(req.params);
  DescriptionText.aggregate([{$match: {'prod_name': req.params.name}},{ $group : { _id : "$prod_name", descriptions: { $push: 
    {text01: "$description_01", caps01: "$description_01_caps", 
    text02: "$description_02", caps02: "$description_02_caps", 
    text03: "$description_03", caps03: "$description_03_caps"} } } }]).then(descriptions => {
      console.log(descriptions);
      res.json(descriptions[0]);
  })
});

app.get('/api/products/', function(req, res) {
  console.log("req");
  Product.aggregate([{ $group : { _id : "$name", colors: { $push: {color: "$color",alt:"$variant"} }} }]).then(products => {
      console.log(products);
      res.json(products);
  })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
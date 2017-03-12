'use strict';

// const { generateImage } = require('random-ascii-image-generator')

const express = require('express')
const app = express()
const session = require('express-session')
const bodyParser = require('body-parser')
const volleyball = require('volleyball')
const api = require('./api')
const db = require('../db')
const path = require('path');
const passport = require('passport')

// generateImage()

app.use(volleyball)

// app.use(session({
// 	secret: 'ihopethisworks'
// }))

app.use(bodyParser.urlencoded({ extended:true})); 
app.use(bodyParser.json());

app.use(passport.initialize())
app.use(passport.session())

app.use('/api', api)

app.use(express.static(path.join(__dirname,'..','public')))

app.use(express.static(path.join(__dirname,'..','node_modules/bootstrap/dist')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


app.use(function(err, req, res, next) {
  console.log('there was a problem', err);
  res
    .status(err.status || 500) 
    .send(err.message || 'uh-oh.');
})


db.sync()
	.then(function() {
		app.listen(3003, function() {
		  console.log('listening on port 3003');
		});
	})
	.catch(function(err) {
		console.log('there was a problem...', err);
})

module.exports = app
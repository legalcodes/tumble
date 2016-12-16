var express = require('express');
var router = express.Router();
var path = require('path');

function handleError(err, done, res) {
	done();
	console.log(err);
	return res.status(500).json({success: false, data: err});
};

// router.get('/api/v1/expungems', function(req, res){

// 		var results = [];

// 		// Get Postgres client from connection pool
// 		pg.connect(connectionString, function(err, client, done){
// 			if(err) {return handleError(err, done, res);}

// 				// SQL Query > Select Data
// 				var query = client.query("SELECT * FROM events ORDER BY id ASC");

// 				// Stream results back one row at a time
// 				query.on('row', function(row) {
// 						results.push(row);
// 				});

// 				// After all data is returned, close connection and return results
// 				query.on('end', function() {
// 						done();
// 						return res.json(results);
// 				});
// 		});
// });

// CREATE


// UPDATE


// DESTROY



module.exports = router;

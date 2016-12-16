var express = require('express');
var router = express.Router();
var path = require('path');

//const API_KEY = 'PBqHiwj1I0gtTrSEvL6BYjX8YbSMzFtAraiHoY7attGmdBR6AR';

function handleError(err, done, res) {
	done();
	console.log(err);
	return res.status(500).json({success: false, data: err});
};

router.get('/api/v1/getblog', function(req, res){
	const results = [];
  // make axios call to tumblr
  console.log("ENDPOINT CODE HAS RUN");

  const post = "/posts";
  const user = "/peacecorps";
  const suffix = ".tumblr.com";
  const apiPrefix = "?api_key=";
  //const tag = "";
  //const transformURI = () => {};
  //const uri = `/v2/blog${user}${suffix}${post}${apiPrefix}${API_KEY}`;
  res.send("Why, hello there!");

});

module.exports = router;

var express = require("express");
var router = express.Router();

router.get("", function(req, res, next) {
	res.json({
		status: 0,
		results: ["abc"]
	})
})
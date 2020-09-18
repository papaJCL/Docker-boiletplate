var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
router.use(express.static(DIST_DIR));
router.get('/', function(req, res, next) {
  res.sendFile(HTML_FILE);
});

module.exports = router;

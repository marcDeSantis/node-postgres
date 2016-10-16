const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.sendFile(
    path.join(__dirname, '..', '..', 'client', 'views', 'index.html')
  );
});

module.exports = router;

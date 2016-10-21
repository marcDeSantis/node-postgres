const express = require('express');
const router = express.Router();
const path = require('path');
var HttpStatus = require('http-status-codes');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.sendFile(
    path.join(__dirname, '..', '..', 'client', 'views', 'index.html')
  );
});

router.post('/api/v1/todos', (req, res, next) => {
  var db = req.app.get('db');
  db.items.insert(req.body, function(err, item){
    return res.status(HttpStatus.CREATED).json(item);
  });
});

router.put('/api/v1/todos/:id', (req, res, next) => {
  var db = req.app.get('db');
  var item = req.body;
  item.id = Number(req.params.id);
  db.items.save(item, function(err, item){
    return res.status(HttpStatus.OK).json(item);
  });
});

router.get('/api/v1/todos', (req, res, next) => {
  var db = req.app.get('db');
  db.items.find(req.query, function(err, items){
    return res.json(items);
  });
});

router.get('/api/v1/todos/:todo_id', (req, res, next) => {
  var result = {};
  const id = Number(req.params.todo_id);
  var db = req.app.get('db');
  db.items.find(id, function(err, item){
    if (item) {
      result = item;
    }
    return res.json(item);
  });
});

router.delete('/api/v1/todos/:id', (req, res, next) => {
  const results = [];
  var db = req.app.get('db');
  db.items.destroy({id: Number(req.params.id)}, function(err, item){
      return res.status(HttpStatus.NO_CONTENT).json(item);
  });
});

module.exports = router;

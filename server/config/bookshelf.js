var knex = require('knex')(
  client: 'pg',
    connection: {
      host     : '127.0.0.1',
      port     : '5432',
      user     : 'desantim',
      password : '',
      database : 'todo',
      charset  : 'utf8'
    }
);

module.exports = require('bookshelf')(knex);

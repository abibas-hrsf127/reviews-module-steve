var db = require('../../db-mysql/index.js');
const {cbQueryHandler} = require('./handlers');

module.exports = {
  reviews: {
    get: function (data, callback) {
      let queryString = 'select * from Reviews';
      db.connection.query(queryString, cbQueryHandler(callback));
    },
    post: function (data, callback) {
      let queryString = 'select * from Reviews';
      db.connection.query(queryString, cbQueryHandler(callback));
    },
  },
  users: {
    get: function (data, callback) {
      console.log('db', db);
      console.log('connection', db.connection);


      callback(null, 'worked');
      // let queryString = 'select * from Users';
      // db.connection.query(queryString, cbQueryHandler(callback));
    },
    post: function (data, callback) {
      let queryString = 'select * from Users';
      db.query(queryString, cbQueryHandler(callback));
    },
  },
};

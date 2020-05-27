var pool = require("../../db/psql/index.js");
const { cbQueryHandler } = require("./handlers");

// module.exports = {
//   reviews: {
//     get: function (id, callback) {
//       let queryString = `select * from reviews where productId=${id}`;
//       pool.query(queryString, cbQueryHandler(callback));
//     },
//   post: function (data, callback) {
//     let queryString = 'select * from Reviews';
//     db.query(queryString, cbQueryHandler(callback));
//   },
// },
// users: {
//   get: function (data, callback) {
//     let queryString = 'select * from Users';
//     db.query(queryString, cbQueryHandler(callback));
//   },
//   post: function (data, callback) {
//     let queryString = 'select * from Users';
//     db.query(queryString, cbQueryHandler(callback));
//   },
//   },
// };

// Postgres
module.exports = {
  reviews: {
    get: function (id, callback) {
      const query = `SELECT * FROM reviews where productId=${id} limit 2`;
      pool.query(query, cbQueryHandler(callback));
    },
    post: function (data, callback) {
      let {
        userId,
        productId,
        isHelpful,
        createdAt,
        isRecommended,
        subject,
        description,
        ratingSize,
        ratingQuality,
        ratingWidth,
        ratingComfort,
        category
      } = data.body;
      
      let queryString = 'INSERT INTO reviews(userId,productId,isHelpful,createdAt,isRecommended,subject,description,ratingSize,ratingQuality,ratingWidth,ratingComfort,category) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)';

      pool.query(
        queryString,
        [
          userId,
          productId,
          isHelpful,
          createdAt,
          isRecommended,
          subject,
          description,
          ratingSize,
          ratingQuality,
          ratingWidth,
          ratingComfort,
          category,
        ],cbQueryHandler(callback)
      );
    },
  },
};


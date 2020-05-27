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
      const query = 'SELECT products.productName, products.ratingOverall, users.email, users.nickname, users.userVerified, reviews.reviewsId,reviews.productId, reviews.isHelpful,reviews.isNotHelpful, reviews.createdAt, reviews.isRecommended, reviews.subject, reviews.description, reviews.ratingSize, reviews.ratingQuality, reviews.ratingWidth, reviews.ratingComfort, reviews.category FROM reviews, users, products WHERE products.productId = $1 AND reviews.userId=users.userId AND reviews.productId=products.productId limit 10';

      pool.query(query, [id], cbQueryHandler(callback));
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
      
      let query = 'INSERT INTO reviews(userId,productId,isHelpful,createdAt,isRecommended,subject,description,ratingSize,ratingQuality,ratingWidth,ratingComfort,category) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)';

      pool.query(
        query,
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
    put: function(data, callback) {
      const {subject, description, reviewsId } = data.body;
      const query = 'UPDATE reviews SET subject = $1, description = $2 WHERE reviewsId = $3';
      pool.query(query, [subject, description, reviewsId], cbQueryHandler(callback)) ;
    },
  },
};


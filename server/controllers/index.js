var models = require("../models");

// module.exports = {
//   reviews: {
//     get: function (req, res) {
//       models.reviews.get(req.params.productId, (err, results) => {
//         if (err) {
//           console.error('controller error from getting message: ', err);
//           res.status(500).send(err);
//         } else {
//           res.send(results);
//         }
//       });
//     },
// post: function (req, res) {
//   models.reviews.post(req, (err, results) => {
//     if (err) {
//       console.log('controller error from posting message: ', err);
//       res.status(500).send(err);
//     } else {
//       res.send(results);
//     }
//   });
// }
//},

// users: {
//   get: function (req, res) {
//     models.users.get(req, (err, results) => {
//       if (err) {
//         console.log('controller error from getting user: ', err);
//       } else {
//         res.send(results);
//       }
//     });
//   },
//   post: function (req, res) {
//     console.log('TODO: POST route for users');
//     res.send('TODO: POST route for users');

//     // models.users.post(req, (err, results) => {
//     //   if (err) {
//     //     console.log('controller error from posting user: ', err);
//     //   } else {
//     //     res.send(results);
//     //   }
//     // });
//   }
// }
//};

module.exports = {
  reviews: {
    get: function (req, res) {
      models.reviews.get(req.params.productId, (err, results) => {
        if (err) {
          console.log("ERROR Object.keys():", Object.keys(err))
          res.status(500).send(err);
        } else {
          res.status(200).send(results.rows);
        }
      });
    },
    post: function (req, res) {
      models.reviews.post(req, (err, results) => {
        if (err) {
          console.log("ERROR Object.keys():", Object.keys(err))
          res.status(500).send(err);
        } else {
          res.status(200).send(results);
        }
      });
    },
    put: function(req, res) {
      models.reviews.put(req, (err, results) => {
        if (err) {
          console.log("ERROR Object.keys():", Object.keys(err))
          res.status(500).send(err);
        } else {
          res.status(200).send(results);
        }
      })
    },
  },
};
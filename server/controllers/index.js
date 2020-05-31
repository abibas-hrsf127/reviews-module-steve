var models = require("../models");
// --------------PSQL-&&-MongoDB--------------Controllers
module.exports = {
  reviews: {
    get: function (req, res) {
      models.reviews.get(req.params.productId, (err, results) => {
        if (err) {
          console.log("ERROR Object.keys():", Object.keys(err))
          res.status(500).send(err);
        } else {
           res.status(200).send(results.rows || results);
          //res.status(200).json(results);
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
    delete: function(req, res) {
      models.reviews.delete(req, (err, results) => {
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
var controller = require('./controllers');
var router = require('express').Router();

//-------------PostgreSQL-DB && MongoDB--------------\\
router.get('/:productId/reviews', controller.reviews.get);
router.post('/reviews', controller.reviews.post);
router.put('/reviews', controller.reviews.put);
router.put('/:productId/reviews', controller.reviews.put);
router.delete('/reviews', controller.reviews.delete);


module.exports = router;


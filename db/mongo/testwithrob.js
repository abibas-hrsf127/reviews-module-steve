const mongoose = require('mongoose');
let options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};

mongoose.connect('mongodb://localhost/testingwithrob', options);


const Schema = mongoose.Schema;

const productSchema = new Schema({
  _id: {type: Number, required: true}
});

const reviewsSchema = new Schema({
  _id: {type: Number, required: true},
  productId: { type: Schema._id, ref: 'product' },
});

const ProductModel = mongoose.model('product', productSchema);
const ReviewsModel = mongoose.model('reviews', reviewsSchema);


const product = new ProductModel();
const reviews = new ReviewsModel();

//product.save(); // Throws "document must have an _id before saving"
product._id = 15;
product.save()
  .then (()=> {
    console.log(product._id instanceof mongoose.Types.ObjectId); // false  
  }); // works 
    
reviews._id = 20;
reviews.productId = 15;

reviews.save()
  .then (()=> {
    console.log('it saved');
  }); // works 
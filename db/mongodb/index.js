const mongoose = require('mongoose');
let options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};

mongoose.connect('mongodb://localhost/reviews', options);

const Schema = mongoose.Schema;

const productSchema = new Schema({
  productId: { type: Number, required: true, unique: true },
  productName: { type: String, required: true },
  reviewsId: [{ type: Schema.Types.ObjectId, ref: 'reviews' }]
});

const reviewsSchema = new Schema({
  reviewId: { type: Number, required: true, unique: true },
  category: { type: String },
  subject: { type: String, required: true },
  description: { type: String },
  ratingOverall: { type: Number, min: 1, max: 5, required: true },
  isRecommended: { type: Boolean, required: true },
  ratingSize: { type: String, required: true },
  ratingWidth: { type: String, required: true },
  ratingComfort: { type: String, required: true },
  ratingQuality: { type: String, required: true },
  isHelpful: Boolean,
  createdAt: { type: Date, default: Date.now },
  productId: { type: Schema.Types.ObjectId, ref: 'product' },
  userId: { type: Schema.Types.ObjectId, ref: 'user' }
});

const userSchema = new Schema({
  reviewsId: [{ type: Schema.Types.ObjectId, ref: 'reviews' }],
  userId: { type: Number, unique: true },
  userName: { type: String },
  email: { type: String, required: true, unique: true },
});

const ProductModel = mongoose.model('product', productSchema);
const ReviewsModel = mongoose.model('reviews', reviewsSchema);
const UserModel = mongoose.model('user', userSchema);


module.exports = { ProductModel, ReviewsModel, UserModel };

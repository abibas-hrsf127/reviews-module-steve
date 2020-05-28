const mongoose = require("mongoose");
let options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose.connect("mongodb://localhost/reviews", options);

const Schema = mongoose.Schema;

const productsSchema = new Schema({
  productId: { type: Number, required: true },
  productName: { type: String, required: true },
  ratingOverall: { type: Number, required: true},
  reviews: [
    {
      userVerified: { type: Boolean },
      nickname: { type: String },
      email: { type: String, required: true },
      category: { type: String },
      subject: { type: String },
      description: { type: String },
      isRecommended: { type: Boolean, required: true },
      ratingSize: { type: String, required: true },
      ratingWidth: { type: String, required: true },
      ratingComfort: { type: String, required: true },
      ratingQuality: { type: String, required: true },
      isHelpful: { type: Number },
      isNotHelpful: { type: Number },
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

// const reviewsSchema = new Schema({
//   // category: { type: String },
//   // subject: { type: String, required: true },
//   // description: { type: String },
//   // ratingOverall: { type: Number, min: 1, max: 5, required: true },
//   // isRecommended: { type: Boolean, required: true },
//   // ratingSize: { type: String, required: true },
//   // ratingWidth: { type: String, required: true },
//   // ratingComfort: { type: String, required: true },
//   // ratingQuality: { type: String, required: true },
//   // isHelpful: Boolean,
//   // createdAt: { type: Date, default: Date.now },
//   // productId: { type: Schema.Types.ObjectId, ref: 'product' },
//   // userId: { type: Schema.Types.ObjectId, ref: 'user' }
// });

// const userSchema = new Schema({
//   userId: { type: Number, unique: true },
//   userName: { type: String },
//   email: { type: String, required: true, unique: true },
// });

// const productSchema = new Schema({
//   productId: { type: Number, required: true, unique: true },
//   productName: { type: String, required: true },
//   reviewsId: [
//     { type: Schema.Types.ObjectId, ref: 'reviews' }
//   ]
// });
// const ReviewsModel = mongoose.model('reviews', reviewsSchema);
// const UserModel = mongoose.model('user', userSchema);
// const product = new ProductModel();

const ProductsModel = mongoose.model("product", productsSchema);
module.exports = ProductsModel ;

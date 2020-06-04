require('dotenv').config();
const mongoose = require("mongoose");
let options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};
mongoose.connect(`${process.env.MONGO_HOST}/reviews`, options);
mongoose.connect('mongodb://13.57.81.157:27017/reviews', options);

const Schema = mongoose.Schema;

const productsSchema = new Schema({
  productId: { type: Number, required: true, unique: true },
  productName: { type: String, required: true },
  ratingOverall: { type: Number, required: true},
  reviews: [
    {
      review_id: { type: Number, required: true },
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
const ProductsModel = mongoose.model("product", productsSchema);
module.exports = ProductsModel ;

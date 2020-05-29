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
      reviewId: { type: Number, required: true, unique: true },
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

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Schema = mongoose.Schema;
const productSchema = new Schema({
  productId: { type: Number, required: true, unique: true },
  productame: { type: String, required: true},
  reviews: [
    {
      user: {
        userId: { type: Number, unique: true },
        firstName: { type: String },
        lastName: { type: String },
        userName: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
      },
      category: { type: String },
      reviewId: { type: Number, required: true, unique: true },
      subject: { type: String, required: true },
      description: { type: String },
      ratingOverall: { type: Number, min: 1, max: 5, required: true },
      isRecommended: { type: Boolean, required: true },
      ratingSize: { type: String, enum: ['a size too small', '1/2 a size too small', 'perfect', '1/2 a size too big', 'a size too big'], required: true },
      ratingWidth: { type: String, enum: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'], required: true },
      ratingComfort: { type: String, enum: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'], required: true },
      ratingQuality: { type: String, enum: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'], required: true },
      isHelpful: { type: Number, required: true, default: 0 },
      isNotHelpful: { type: Number, required: true, default: 0 },
      createdAt: { type: Date, default: Date.now },
      images: [
        {
          imageId: { type: Number },
          imageUrl: { type: String },
        },
      ],
    },
  ],
});
const ProductModel = mongoose.model('product', productSchema);
module.exports = { ProductModel };

const faker = require("faker");
const ProductsModel = require("./index.js");

async function seedMongo(outer, inner) {

  var reviewCounter = 1;
  var reviewList = [];
  var createReview = function () {
    for (let p = 0; p < faker.random.number({ min: 0, max: 10 }); p++) {
      reviewList.push({
        review_id: reviewCounter,
        userVerified: faker.random.boolean(),
        nickname: faker.internet.userName(),
        email: faker.internet.email(),
        category: faker.random.arrayElement([
          "comfort",
          "price",
          "quality",
          "satisfaction",
          "color",
        ]),
        subject: faker.lorem.sentence(),
        description: faker.lorem.sentences(),
        isRecommended: faker.random.boolean(),
        ratingSize: faker.random.arrayElement([
          "a size too small",
          "1/2 a size too small",
          "Perfect",
          "1/2 a size too big",
          "a size too big",
        ]),
        ratingWidth: faker.random.arrayElement([
          "Too narrow",
          "Slightly narrow",
          "Perfect",
          "Slightly wide",
          "Too wide",
        ]),
        ratingComfort: faker.random.arrayElement([
          "Uncomfortable",
          "Slightly uncomfortable",
          "Ok",
          "Comfortable",
          "Perfect",
        ]),
        ratingQuality: faker.random.arrayElement([
          "Poor",
          "Below average",
          "What I expected",
          "Pretty great",
          "Perfect",
        ]),
        isHelpful: faker.random.number({ min: 0, max: 1000 }),
        isNotHelpful: faker.random.number({ min: 0, max: 1000 }),
        createdAt: faker.date
          .between("2020-01-01", "2020-05-05")
          .toString()
          .replace(/G.+/g, "PST"),
      });
      reviewCounter += 1;
    }
  };

  var productCounter = 1;
  for (var i = 0; i < outer; i++) {
    var productList = [];
    for (var j = 0; j < inner; j++) {
      createReview();
      var singleProduct = {
        productId: productCounter,
        productName: faker.commerce.productName(),
        ratingOverall: faker.random.number({ min: 1, max: 5 }),
        reviews: reviewList
      };
      reviewList = [];
      productList.push(singleProduct);
      productCounter += 1;
      if (productCounter % 100000 === 0) {
        console.log("product seeding progress:", productCounter);
      }
    }
    await ProductsModel.insertMany(productList);
  }
  console.log("Number of review:", reviewCounter - 1);
  console.log("Number of product:", productCounter - 1);
}


seedMongo(10000, 1000);
console.log("...done");
console.time("seed time");
console.timeEnd("seed time");



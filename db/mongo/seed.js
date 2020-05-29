const faker = require("faker");
const ProductsModel = require("./index.js");

async function seedMongo(outer, inner) {
  let counter = 1;

  for (let o = 0; o < outer; o++) {
    let arrResults = [];

    for (let i = 0; i < inner; i++) {
      let object = {
        productId: faker.random.number({ min: 1, max: 10000 }),
        productName: faker.commerce.productName(),
        ratingOverall: faker.random.number({ min: 1, max: 5 }),
        reviews: [
          {
            reviewId: counter,
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
          },
        ],
      };
      arrResults.push(object);
      counter++;
      if (counter % 100000 === 0) {
        console.log("product seeding progress:", counter);
      }
    }
    await ProductsModel.insertMany(arrResults);
  }
}

seedMongo(1000, 10000);
console.log("...done");
console.time("seed time");

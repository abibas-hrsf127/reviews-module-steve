const faker = require("faker");
const fs = require("fs");
const path = require("path");

const seedUsers = () => {
  let fileContent = "";
  let index = 0;
  for (let i = 1; i <= 10000; i += 1) {
    const nickname = faker.internet.userName();
    const email = faker.internet.email();
    const userVerified = faker.random.boolean();
    fileContent += `'${nickname}', '${email}', ${userVerified}\n`;
  }
  fs.writeFile(
    path.join(__dirname, "../../data/users.csv"),
    fileContent,
    (err) => {
      if (err) {
        console.log("error", err);
      } else {
        console.log("the users file is successfully created");
      }
    }
  );
};

const seedProducts = (quantity) => {
  let fileContent = "";
  for (let i = 1; i <= quantity; i += 1) {
    const productName = faker.commerce.productName();
    const ratingOverall = faker.random.number({ min: 1, max: 5 });
    fileContent += `'${productName}', ${ratingOverall}\n`;
  }
  fs.writeFile(
    path.join(__dirname, "../../data/products.csv"),
    fileContent,
    (err) => {
      if (err) {
        console.log("error", err);
      } else {
        console.log("the products file is successfully created");
      }
    }
  );
};

const writeReviews1 = fs.createWriteStream(
  path.join(__dirname, "../../data/reviews1.csv"),
  "utf8"
);
const writeReviews2 = fs.createWriteStream(
  path.join(__dirname, "../../data/reviews2.csv"),
  "utf8"
);
const writeReviews3 = fs.createWriteStream(
  path.join(__dirname, "../../data/reviews3.csv"),
  "utf8"
);
const writeReviews4 = fs.createWriteStream(
  path.join(__dirname, "../../data/reviews4.csv"),
  "utf8"
);
const writeReviews5 = fs.createWriteStream(
  path.join(__dirname, "../../data/reviews5.csv"),
  "utf8"
);
const writeReviews6 = fs.createWriteStream(
  path.join(__dirname, "../../data/reviews6.csv"),
  "utf8"
);
const writeReviews7 = fs.createWriteStream(
  path.join(__dirname, "../../data/reviews7.csv"),
  "utf8"
);

function seedingReviews(writer, encoding, amount, callback) {
  let userId = 1;
  let reviewIndex = 0;

  function write() {
    let ok = true;
    do {
      amount -= 1;

      const isHelpful = faker.random.boolean();
      const createdAt = faker.date
        .between("2020-01-01", "2020-05-05")
        .toString()
        .replace(/G.+/g, "PST");
      const isRecommended = faker.random.boolean();
      const subject = faker.lorem.sentence();
      const description = faker.lorem.sentences();
      const ratingSize = faker.random.arrayElement([
        "a size too small",
        "1/2 a size too small",
        "Perfect",
        "1/2 a size too big",
        "a size too big",
      ]);
      const ratingQuality = faker.random.arrayElement([
        "Poor",
        "Below average",
        "What I expected",
        "Pretty great",
        "Perfect",
      ]);
      const ratingWidth = faker.random.arrayElement([
        "Too narrow",
        "Slightly narrow",
        "Perfect",
        "Slightly wide",
        "Too wide",
      ]);
      const ratingComfort = faker.random.arrayElement([
        "Uncomfortable",
        "Slightly uncomfortable",
        "Ok",
        "Comfortable",
        "Perfect",
      ]);
      const category = faker.random.arrayElement([
        "comfort",
        "price",
        "quality",
        "satisfaction",
        "color",
      ]);
      const productId = faker.random.number({ min: 1, max: 10000 });

      const data = `${userId},${productId},${isHelpful},${createdAt},${isRecommended},${subject},${description},${ratingSize},${ratingQuality},${ratingWidth},${ratingComfort},${category}\n`;

      userId === 10000 ? (userId = 1) : (userId += 1);

      if (amount === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (amount > 0 && ok);
    if (amount > 0) {
      writer.once("drain", write);
    }
  }
  write();
}

seedUsers();
seedProducts(10000);
seedingReviews(writeReviews1, "utf-8", 1500000, () => {
  console.log("...done1");
  console.time();
  writeReviews1.end();
  console.timeEnd();
});
seedingReviews(writeReviews2, "utf-8", 1500000, () => {
  console.log("...done2");
  console.time("seed time2");
  writeReviews2.end();
});
seedingReviews(writeReviews3, "utf-8", 1500000, () => {
  console.log("...done3");
  console.time("seed time3");
  writeReviews3.end();
});
seedingReviews(writeReviews4, "utf-8", 1500000, () => {
  console.log("...done4");
  console.time("seed time4");
  writeReviews4.end();
});
seedingReviews(writeReviews5, "utf-8", 1500000, () => {
  console.log("...done5");
  console.time("seed time5");
  writeReviews5.end();
});
seedingReviews(writeReviews6, "utf-8", 1500000, () => {
  console.log("...done6");
  console.time("seed time6");
  writeReviews6.end();
});
seedingReviews(writeReviews7, "utf-8", 1000000, () => {
  console.log("...done7");
  console.time("seed time7");
  writeReviews7.end();
});

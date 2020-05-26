const faker = require("faker");
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// const csvWriter = createCsvWriter({
//   path: 'mongo.csv',
//   header: [
//     { id: 'productId', title: 'productId' },
//     { id: 'productName', title: 'productName' },
//     { id: 'reviews', title: 'reviews' },
//   ]
// });

// let seedReviews = () => {
//   let reviews = [];
//   while(reviews.length < 100) {
//     reviews.push({
//       productId: faker.random.number({ 'min': 1, 'max': 1000 }),
//       productName: faker.lorem.word(),
//       reviews: [{
//           userName: faker.lorem.word(),
//           email: faker.internet.email(),
//           category: faker.random.arrayElement(['comfort', 'price', 'quality', 'satisfaction', 'color']),
//           subject: faker.hacker.phrase(),
//           description: faker.lorem.sentence(),
//           ratingOverall:  faker.random.number({ 'min': 1, 'max': 5 }),
//           isRecommended: faker.random.boolean(),
//           ratingSize: faker.random.arrayElement(['a size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'a size too big']),
//           ratingWidth: faker.random.arrayElement(['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide']),
//           ratingComfort: faker.random.arrayElement(['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect']),
//           ratingQuality: faker.random.arrayElement(['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect']),
//           isHelpful: faker.random.boolean(),
//           createdAt: faker.date.between('2000-01-01', '2019-12-31')}]
//       })
//   }
//   return reviews;
// }

// let round = 0;
// let append = () => {
//   if (round < 100) {
//     round += 1;
//     let data = seedReviews();
//     csvWriter.writeRecords(data).then(() => append());
//   } else {
//     console.timeEnd("writeCSV");
//     console.log("The CSV file was written successfully");
//   }
// };
// console.time("writeCSV");
// append();

// const converter = require("json-2-csv");

const converter = require("json-2-csv");
const fs = require("fs");

let seedReviews = () => {
    let reviews = [];
    while(reviews.length < 100) {        
        let object = {
          "productId": faker.random.number({ 'min': 1, 'max': 1000 }),
          "productName": faker.lorem.word(),
          "reviews": [    
              {
              "userName": faker.lorem.word(),
              "email": faker.internet.email(),
              "category": faker.random.arrayElement(['comfort', 'price', 'quality', 'satisfaction', 'color']),
              "subject": faker.hacker.phrase(),
              "description": faker.lorem.sentence(),
              "ratingOverall":  faker.random.number({ 'min': 1, 'max': 5 }),
              "isRecommended": faker.random.boolean(),
              "ratingSize": faker.random.arrayElement(['a size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'a size too big']),
              "ratingWidth": faker.random.arrayElement(['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide']),
              "ratingComfort": faker.random.arrayElement(['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect']),
              "ratingQuality": faker.random.arrayElement(['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect']),
              "isHelpful": faker.random.boolean(),
              "createdAt": faker.date.between('2000-01-01', '2019-12-31')}]
        };
        reviews.push(object)
    }
    return reviews;
  }
let round = 0;
let append = () => {
  if (round < 10000) {
    round += 1;
    let data = seedReviews();
    converter
    .json2csvAsync(data).then((csv) => { 
      fs.writeFileSync("mongo.csv", csv)
      append();
    }).catch((err) => console.log(err));
  } else {
    console.log("The CSV file was written successfully");
  }
};
console.time("writeCSV");
append();



// converter
//   .json2csvAsync(seedReviews())
//   .then((csv) => {
//     // write CSV to a file
//     fs.writeFileSync("mongo.csv", csv);
//   })
//   .catch((err) => console.log(err));

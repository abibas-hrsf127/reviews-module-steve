const faker = require('faker');
const ProductsModel = require('./index.js');

async function seedMongo(outer, inner) {
    let counter = 0; 
    
    for (let o = 0 ; o < outer ; o++) {
        let arrResults = [];

        for (let i = 0; i < inner; i++) {

            let object = {
                productId: faker.random.number({ 'min': 1, 'max': 1000 }),
                productName: faker.lorem.word(),
                reviews: [    
                    {
                    userName: faker.lorem.word(),
                    email: faker.internet.email(),
                    category: faker.random.arrayElement(['comfort', 'price', 'quality', 'satisfaction', 'color']),
                    subject: faker.hacker.phrase(),
                    description: faker.lorem.sentence(),
                    ratingOverall:  faker.random.number({ 'min': 1, 'max': 5 }),
                    isRecommended: faker.random.boolean(),
                    ratingSize: faker.random.arrayElement(['a size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'a size too big']),
                    ratingWidth: faker.random.arrayElement(['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide']),
                    ratingComfort: faker.random.arrayElement(['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect']),
                    ratingQuality: faker.random.arrayElement(['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect']),
                    isHelpful: faker.random.boolean(),
                    createdAt: faker.date.between('2000-01-01', '2019-12-31'),
                    }
                    ]
                }
                arrResults.push(object);
                counter++;
            }
    await ProductsModel.ProductsModel.insertMany(arrResults); 
    }
}


seedMongo(1000, 10000);
console.log('...done');
console.time('seed time');
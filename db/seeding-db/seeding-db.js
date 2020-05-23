const faker = require('faker');
const fs = require('fs');

const seeding = fs.createWriteStream('./test.csv', 'utf8');

seeding.write('id,username,avatar\n');



function writeTenMillionUsers(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    i -= 1;
    id += 1;
        do {
      const username = faker.internet.userName();
      const avatar = faker.image.avatar();
      const data = `${id},${username},${avatar}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
// see if we should continue, or wait
// don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
// had to stop early!
// write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}

writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
});


const seedReviews = (quantity) => {
  const filePath = path.join(__dirname, '../../data/reviews');
  let fileContent = '';
  let reviewIndex = 0;
  let userId = 1;
  const randomReviews = [5, 10, 6, 8, 7, 3, 15, 16, 19, 20, 2, 9, 14, 12, 11, 14, 12, 15, 7, 8];

  for (let i = 1; i <= quantity; i += 1) {
    for (let j = 1; j <= randomReviews[reviewIndex]; j += 1) {

      const  isHelpful = faker.random.boolean();
      const createdAt = faker.date.between('2020-01-01', '2020-05-05').toString().replace(/G.+/g, 'PST');
      const isRecommended = faker.random.boolean();
      const  subject = faker.hacker.phrase();
      const description = faker.lorem.sentence();
      const  ratingSize = faker.random.arrayElement(['a size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'a size too big']);
      const ratingQuality = faker.random.arrayElement(['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect']);
      const ratingWidth = faker.random.arrayElement(['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide']);
      const ratingComfort = faker.random.arrayElement(['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect']);
      const category =  faker.random.arrayElement(['comfort', 'price', 'quality', 'satisfaction', 'color']);

      fileContent += `${userId}, ${i}, ${isHelpful}, '${createdAt}', ${isRecommended}, '${subject}', '${description}', ${ratingSize}, ${ratingQuality}, ${ratingWidth}, ${ratingComfort}, ${category},\n`;

      (userId === 100) ? userId = 1 : userId += 1;
    }
    (reviewIndex === 19) ? reviewIndex = 0 : reviewIndex += 1;

    if ((i+1) % 400000 === 0) {
      let writeStream = fs.createWriteStream(`${filePath}.csv`, 'utf8');

      writeStream.write(fileContent, (err) => {
        if (err) {
          console.log('error' , err)
        } else {
          console.log(`the Reviews file is successfully created`);
        }
      })
      fileContent = '';
    }
  }
  
  let writeStream = fs.createWriteStream(`${filePath}.csv`, 'utf8');
  fs.writeFile(`${filePath}.csv`, fileContent, (err) => {
    if (err) {
      console.log('error' , err)
    } else {
      console.log(`the Reviews file is successfully created`);
    }
  })
}

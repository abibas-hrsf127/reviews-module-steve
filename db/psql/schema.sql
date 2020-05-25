DROP DATABASE IF EXISTS adidas_sdc;

CREATE DATABASE adidas_sdc;

\c adidas_sdc;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS reviews;

CREATE TABLE users(
   userId SERIAL PRIMARY KEY,
   nickname VARCHAR(50) NOT NULL,
   email VARCHAR(255) NOT NULL,
   userVerified BOOLEAN NOT NULL
);

CREATE TABLE products(
   productId SERIAL PRIMARY KEY,
   productName VARCHAR(255) NOT NULL,
   ratingOverall INTEGER NOT NULL
);

CREATE TABLE reviews(
  reviewsId SERIAL PRIMARY KEY,
  userId INT NOT NULL,
  productId INT NOT NULL,
  isHelpful BOOLEAN,
  isRecommended BOOLEAN,
  subject VARCHAR(200) NOT NULL,
  description VARCHAR(1200) NOT NULL,
  ratingSize VARCHAR(30) NOT NULL,
  ratingQuality VARCHAR(30) NOT NULL,
  ratingWidth VARCHAR(30) NOT NULL,
  ratingComfort VARCHAR(30) NOT NULL,
  category VARCHAR(30) NOT NULL
);

COPY users(nickname, email, userVerified) FROM '/Users/stevemarquez/hrsf127/SDC/reviews-module/data/users.csv' WITH DELIMITER ',';
COPY products(productName, ratingOverall) FROM '/Users/stevemarquez/hrsf127/SDC/reviews-module/data/products.csv' WITH DELIMITER ',';
COPY reviews (userId, productId, isHelpful,isRecommended, subject, description, ratingSize, ratingQuality, ratingWidth, ratingComfort, category) FROM '/Users/stevemarquez/hrsf127/SDC/reviews-module/data/reviews1.csv' WITH DELIMITER ',';
COPY reviews (userId, productId, isHelpful,isRecommended, subject, description, ratingSize, ratingQuality, ratingWidth, ratingComfort, category) FROM '/Users/stevemarquez/hrsf127/SDC/reviews-module/data/reviews2.csv' WITH DELIMITER ',';
COPY reviews (userId, productId, isHelpful,isRecommended, subject, description, ratingSize, ratingQuality, ratingWidth, ratingComfort, category) FROM '/Users/stevemarquez/hrsf127/SDC/reviews-module/data/reviews3.csv' WITH DELIMITER ',';
COPY reviews (userId, productId, isHelpful,isRecommended, subject, description, ratingSize, ratingQuality, ratingWidth, ratingComfort, category) FROM '/Users/stevemarquez/hrsf127/SDC/reviews-module/data/reviews4.csv' WITH DELIMITER ',';
COPY reviews (userId, productId, isHelpful,isRecommended, subject, description, ratingSize, ratingQuality, ratingWidth, ratingComfort, category) FROM '/Users/stevemarquez/hrsf127/SDC/reviews-module/data/reviews5.csv' WITH DELIMITER ',';
COPY reviews (userId, productId, isHelpful,isRecommended, subject, description, ratingSize, ratingQuality, ratingWidth, ratingComfort, category) FROM '/Users/stevemarquez/hrsf127/SDC/reviews-module/data/reviews6.csv' WITH DELIMITER ',';
COPY reviews (userId, productId, isHelpful,isRecommended, subject, description, ratingSize, ratingQuality, ratingWidth, ratingComfort, category) FROM '/Users/stevemarquez/hrsf127/SDC/reviews-module/data/reviews7.csv' WITH DELIMITER ',';


ALTER TABLE reviews ADD FOREIGN KEY (productId) REFERENCES products(productId);
ALTER TABLE reviews ADD FOREIGN KEY (userId) REFERENCES users(userId);



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
   productName VARCHAR(255) NOT NULL
);

CREATE TABLE reviews(
  reviewsId SERIAL PRIMARY KEY,
  isHelpful BOOLEAN NOT NULL,
  createdAt DATE NOT NULL,
  ratingOverall INTEGER NOT NULL,
  isRecommended BOOLEAN,
  subject VARCHAR(100) NOT NULL,
  description VARCHAR(1200) NOT NULL,
  ratingSize CHAR(1) NOT NULL,
  ratingQuality CHAR(1) NOT NULL,
  ratingWidth CHAR(1) NOT NULL,
  ratingComfort CHAR(1) NOT NULL,
  category CHAR(1) NOT NULL,
  userId INTEGER NOT NULL REFERENCES users (userId),
  productId INTEGER NOT NULL REFERENCES products (productId)
);



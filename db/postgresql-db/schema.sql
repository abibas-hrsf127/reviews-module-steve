DROP DATABASE IF EXISTS adidas_sdc;

CREATE DATABASE adidas_sdc;

\c adidas_sdc;

DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS reviews;

CREATE TABLE users(
   user_id SERIAL PRIMARY KEY NOT NULL,
   firstName VARCHAR(50) NOT NULL,
   lastName VARCHAR(50) NOT NULL,
   userName VARCHAR(50) NOT NULL,
   email VARCHAR(255) NOT NULL,
   password VARCHAR(50) NOT NULL
   userVerified BOOLEAN NOT NULL

);

CREATE TABLE products(
   productId SERIAL PRIMARY KEY NOT NULL,
   productName VARCHAR(255) NOT NULL
);


CREATE TABLE images(
   imageId SERIAL PRIMARY KEY NOT NULL,
   imageUrl VARCHAR(255) NOT NULL,
   reviewId INTEGER NOT NULL
);

CREATE TABLE reviews(
  imageId INTEGER NOT NULL,
  reviewId SERIAL PRIMARY KEY NOT NULL,
  isHelpful BOOLEAN NOT NULL DEFAULT 0,
  createdAt DATE NOT NULL,
  notHelpful BOOLEAN NOT NULL DEFAULT 0,
  ratingOverall INTEGER NOT NULL,
  isRecommended BOOLEAN NOT NULL,
  userId INTEGER NOT NULL,
  productId INTEGER NOT NULL,
  subject VARCHAR(100) NOT NULL,
  description VARCHAR(1200) NOT NULL,
  ratingSize CHAR(1) NOT NULL,
  ratingQuality CHAR(1) NOT NULL,
  ratingWidth CHAR(1) NOT NULL,
  ratingComfort CHAR(1) NOT NULL
  category: CHAR(1) NOT NULL,
);
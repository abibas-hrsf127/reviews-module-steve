DROP DATABASE IF EXISTS adidas_sdc;

CREATE DATABASE adidas_sdc;

\c adidas_sdc;

DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS reviews;

CREATE TABLE users(
   user_id SERIAL PRIMARY KEY NOT NULL,
   first_name VARCHAR(50) NOT NULL,
   last_name VARCHAR(50) NOT NULL,
   username VARCHAR(50) NOT NULL,
   email VARCHAR(255) NOT NULL,
   password VARCHAR(50) NOT NULL

);


CREATE TABLE products(
   product_id SERIAL PRIMARY KEY NOT NULL,
   product_name VARCHAR(255) NOT NULL
);


CREATE TABLE images(
   image_id SERIAL PRIMARY KEY NOT NULL,
   url VARCHAR(255) NOT NULL,
   review_id INTEGER NOT NULL
);

CREATE TABLE reviews(
  review_id SERIAL PRIMARY KEY NOT NULL,
  created_at DATE NOT NULL,
  rating INTEGER NOT NULL,
  is_helpful BOOLEAN NOT NULL,
  not_helpful BOOLEAN NOT NULL,
  is_recommended BOOLEAN NOT NULL,
  subject VARCHAR(100) NOT NULL,
  description VARCHAR(1200) NOT NULL,
  product_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  image_id INTEGER NOT NULL,
  rating_size CHAR(1) NOT NULL,
  rating_quality CHAR(1) NOT NULL,
  rating_width CHAR(1) NOT NULL,
  rating_comfort CHAR(1) NOT NULL
);
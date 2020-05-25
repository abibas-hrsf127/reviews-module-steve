// // This document downloads 1000 faker images to a image folder when running the command line "node downloadUserImage.js"

// /* eslint-disable no-plusplus */
// const faker = require("faker");
// const axios = require("axios");
// const path = require("path");
// const fs = require("fs");

// const s3Images = [
//   "https://legogallery.s3-us-west-1.amazonaws.com/1.jpg",
//   "https://legogallery.s3-us-west-1.amazonaws.com/2.jpg",
//   "https://legogallery.s3-us-west-1.amazonaws.com/3.jpg",
//   "https://legogallery.s3-us-west-1.amazonaws.com/4.jpg",
//   "https://legogallery.s3-us-west-1.amazonaws.com/5.jpg",
//   "https://legogallery.s3-us-west-1.amazonaws.com/6.jpg",
//   "https://legogallery.s3-us-west-1.amazonaws.com/7.jpg",
//   "https://legogallery.s3-us-west-1.amazonaws.com/8.jpg",
//   "https://legogallery.s3-us-west-1.amazonaws.com/9.jpg",
//   "https://legogallery.s3-us-west-1.amazonaws.com/10.jpg",
//   "https://legogallery.s3-us-west-1.amazonaws.com/11.jpg",
//   "https://legogallery.s3-us-west-1.amazonaws.com/12.jpg",
//   "https://legogallery.s3-us-west-1.amazonaws.com/13.jpg",
//   "https://legogallery.s3-us-west-1.amazonaws.com/14.jpg",
//   "https://legogallery.s3-us-west-1.amazonaws.com/15.jpg",
//   "https://legogallery.s3-us-west-1.amazonaws.com/16.jpg",
//   "https://legogallery.s3-us-west-1.amazonaws.com/17.jpg",
//   "https://legogallery.s3-us-west-1.amazonaws.com/18.jpg",
//   "https://legogallery.s3-us-west-1.amazonaws.com/19.jpg",
//   "https://legogallery.s3-us-west-1.amazonaws.com/20.jpg",
// ];

// const images = [];``
// // 1000 images fashion
// for (let i = 0; i < 1000; i++) {
//   images.push(`${s3Images[Math.floor(Math.random() * 20)]}`);
// }

// // download 1000 user photoes to local image folder
// const test = () => {
//   for (let i = 0; i < images.length; i++) {
//     // path for image storage
//     const imagePath = path.join(__dirname, "../image", `${i}.jpg`);
//     let urls = images[i];

//     let config = {
//       method: "GET",
//       responseType: "stream",
//     };

//     async function getUser() {
//       try {
//         const response = await axios.get(urls, config);

//         response.data.pipe(fs.createWriteStream(imagePath));
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     getUser();
//   }
// };

// test();

// // // upload 1000 user photoes to amazon aws s3 storage and generate urls for those pictures

// // Check for missing images from the array. Sometimes the previous formula does not run properly
// // const { readdirSync } = require('fs');
// // const imageFolder = '../image';

// // var count = [];
// // var countFormula = function() {
// //   for (var j=0; j<1000; j++) {
// //     count.push(j);
// //   }
// // }
// // countFormula();

// // var allFileNames = readdirSync(imageFolder);
// // var allFileNamesWithoutExtension = [];

// // for (var i=0; i<allFileNames.length; i++) {
// //   var split = allFileNames[i].split('.');
// //   allFileNamesWithoutExtension.push(Number(split[0]));
// // }

// // for (var k=0; k<count.length; k++) {
// //   if (allFileNamesWithoutExtension.includes(count[k])) {

// //   } else {
// //     console.log("Not there:", count[k]);
// //   }
// // }


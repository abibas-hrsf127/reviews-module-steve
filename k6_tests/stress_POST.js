import http from "k6/http";
import { Counter } from "k6/metrics";
import { group, sleep, check } from "k6";
var myErrorCounter = new Counter("my_error_counter");
export let options = {
    stages: [
        { duration: '1m', target: 100 },
        { duration: '1m', target: 100 },
        { duration: '2m', target: 200 },
        { duration: '2m', target: 200 },
        { duration: '1m', target: 300 },
        { duration: '1m', target: 0 },
    ],
    thresholds: {
        'failed requests': ['rate<0.1'],  // system doesn't produce more than 1% error
        'http_req_duration': [{ threshold: 'p(95)<500' }]  // response time for 95% of requests should be below 500ms
    }
};
// export let options = {
//   vus: 100,
//   duration: "30s",
//   thresholds: {
//     "failed requests": ["rate<0.1"], // system doesn't produce more than 1% error
//     http_req_duration: [{ threshold: "p(95)<1500" }], // response time for 95% of requests should be below 500ms
//   },
// };

export default function () {
  const rating = [1,2,3,4,5];
  const verified = [true, false];
  const nickames = [
    "steve",
    "fernando",
    "steve1995",
    "steveantoni22o",
    "juanito123",
    "frank22",
    "marcu123s",
  ];
  const emails = [
    "stev22e@gmail",
    "stev33e@gmail",
    "steve112@gmail",
    "stev23e@gmail",
    "ste22ve@gmail",
    "ste11ve@gmail",
  ];
  const categoryList = ["comfort", "price", "quality", "satisfaction", "color"];
  const subjectList = [
    "this is a great shoe!!! highly recomended",
    "the price was amazing",
    "Get it , the quality is worth it!!",
    "I am highly satisfied, this is great!",
    "Someone deservers to create more colors",
  ];
  const descriptionList = [
    "I am writing this thing because it is a great shoe!!! highly recomended",
    "Please follow me on instagram.. I am the king of new york and the price was amazing",
    "Leeeeeet gooo Get it , the quality is worth it!!",
    "I am highly satisfied, what do you want from my g? i just want to change the world and make it awesome this is great!",
    "Someone deservers to create more colors and an anaming award",
  ];
  const isRecom = [true, false];
  const ratingSizeList = [
    "a size too small",
    "1/2 a size too small",
    "Perfect",
    "1/2 a size too big",
    "a size too big",
  ];
  const widthList = [
    "Too narrow",
    "Slightly narrow",
    "Perfect",
    "Slightly wide",
    "Too wide",
  ];
  const comfortList = [
    "Uncomfortable",
    "Slightly uncomfortable",
    "Ok",
    "Comfortable",
    "Perfect",
  ];
  const quality = [
    "Poor",
    "Below average",
    "What I expected",
    "Pretty great",
    "Perfect",
  ];
  const helpful = [
    1,
    33,
    55,
    66,
    777,
    1233,
    122,
    331,
    11,
    22,
    8,
    3,
    66,
    5555,
    32,
    11,
    2233,
  ];
  const helpfulNot = [
    1,
    33,
    55,
    66,
    77,
    133,
    122,
    31,
    11,
    22,
    8,
    3,
    66,
    55,
    32,
    11,
    22,
  ];

  const url = "http://localhost:3003/api/models/reviews";
  const randomCount = Math.floor(Math.random() * 1000000000) + 7450000;
  const payload = JSON.stringify({
    productId: randomCount,
    productName: `new item ${randomCount}`,
    ratingOverall: rating[Math.floor(Math.random() * rating.length)],

    reviews: [
      {
        review_id: randomCount,
        userVerified: verified[Math.floor(Math.random() * verified.length)],
        nickname: nickames[Math.floor(Math.random() * nickames.length)],
        email: emails[Math.floor(Math.random() * emails.length)],
        category: categoryList[Math.floor(Math.random() * categoryList.length)],
        subject: subjectList[Math.floor(Math.random() * subjectList.length)],
        description:
          descriptionList[Math.floor(Math.random() * descriptionList.length)],
        isRecommended: isRecom[Math.floor(Math.random() * isRecom.length)],
        ratingSize:
          ratingSizeList[Math.floor(Math.random() * ratingSizeList.length)],
        ratingWidth: widthList[Math.floor(Math.random() * widthList.length)],
        ratingComfort:
          comfortList[Math.floor(Math.random() * comfortList.length)],
        ratingQuality: quality[Math.floor(Math.random() * quality.length)],
        isHelpful: helpful[Math.floor(Math.random() * helpful.length)],
        isNotHelpful: helpfulNot[Math.floor(Math.random() * helpfulNot.length)],
        createdAt: new Date("2014-12-11T14:12:00Z"),
      },
    ],
  });
  var params = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res = http.post(url, payload, params);
  check(res, { "status was 201": (r) => r.status == 201 });
  sleep(1);
}

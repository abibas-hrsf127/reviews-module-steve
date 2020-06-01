import http from "k6/http";
import { Counter, Rate } from "k6/metrics";
import { check, sleep } from "k6";

var myErrorCounter = new Counter("my_error_counter");

const randomIntBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


export let options = {
  stages: [
    { duration: '2m', target: 100 }, // below normal load
    { duration: '2m', target: 100 },
    { duration: '2m', target: 200 }, // normal load
    { duration: '3m', target: 200 },
    { duration: '3m', target: 300 }, // around the breaking point
    { duration: '3m', target: 400 },
    { duration: '3m', target: 500 }, // beyond the breaking point
    { duration: '3m', target: 600 },
    { duration: '2m', target: 0 }, // scale down. Recovery stage
  ],
};

export default function () {
  for (let productId = 1; productId < 1000; productId++) {
    let res = http.get(`http://localhost:3003/api/models/${Math.round(randomIntBetween(1,10000))}/reviews`);
    check(res, { "status was 200": (r) => r.status == 200 });
    sleep(1);
  }
  if(res.status === 404) {
    myErrorCounter.add(1)
  }
}

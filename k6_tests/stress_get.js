import http from "k6/http";
import { Counter, Rate } from "k6/metrics";
import { check, sleep } from "k6";

var myErrorCounter = new Counter("my_error_counter");

const randomIntBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export let options = {
  stages: [
    { duration: "2m", target: 100 }, // below normal load
    { duration: "2m", target: 100 },
    { duration: "2m", target: 200 }, // normal load
    { duration: "2m", target: 200 },
    { duration: "2m", target: 300 }, // around the breaking point
    { duration: "1m", target: 0 },   // scale down. Recovery stage
  ],

  thresholds: {
    http_req_duration: ["p(99)<1500"], // 99% of requests must complete below 1.5s
  },
};

export default function () {
  const url = "http://localhost:3003/api/models";
  let res = http.get(
    `${url}/${Math.round(randomIntBetween(1, 10000000))}/reviews`
  );
  check(res, { "status was 200": (r) => r.status == 200 });
  if (res.status === 404) {
    myErrorCounter.add(1);
  }
}

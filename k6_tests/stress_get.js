import http from "k6/http";
import { Counter, Rate } from "k6/metrics";
import { check, sleep } from "k6";

var myErrorCounter = new Counter("my_error_counter");


export let options = {
  stages: [
    { duration: "1m", target: 100 }, // below normal load
    { duration: "1m", target: 100 },
    { duration: "1m", target: 200 }, // normal load
    { duration: "1m", target: 200 }, // around the breaking point
    { duration: "1m", target: 300 }, // around the breaking point
    { duration: "1m", target: 300 }, // around the breaking point
    { duration: "1m", target: 0 },   // scale down. Recovery stage
  ],

    // vus: 300,
    // duration: '20s'

  thresholds: {
      http_req_duration: ["p(99)<1500"], // 99% of requests must complete below 1.5s
    },
  };
  
  export default function () {
    const url = `http://localhost:80/api/models`;
    const randomIntBetween = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    
  let res = http.get(
    `${url}/${Math.round(randomIntBetween(1, 10000000))}/reviews`
  );
  check(res, { "status was 200": (r) => r.status == 200 });
  if (res.status === 404) {
    myErrorCounter.add(1);
  }
  sleep(1);
}

import { Counter } from "k6/metrics";
import http from "k6/http";

const randomIntBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export let options = {
  vus: 10,
  duration: '30s',
};

var myErrorCounter = new Counter("my_error_counter");

export default function() {
  // let res = http.get(`http://localhost:3003/api/models/${Math.round(randomIntBetween(1,10000))}/reviews`);
  let res = http.get("https://test.loadimpact.com/404");
  if(res.status === 404) {
    myErrorCounter.add(1)
  }
};
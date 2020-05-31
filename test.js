import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  vus: 1,
  duration: '30s',
};
export default function() {
  http.get('http://http://localhost:3000/');
  sleep(1);
}
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 50 },
    { duration: '1m', target: 150 },
    { duration: '1m', target: 150 },
    { duration: '1m', target: 200 },
    { duration: '1m', target: 250 },
    { duration: '1m', target: 300 },
  ],
  thresholds: {
    // sin thresholds: la prueba nunca falla
  },
};

export default function () {
  const res = http.get('https://api.payflow.test/v1/pagos');
  check(res, { 'status es 200': (r) => r.status === 200 });
  sleep(1);
}

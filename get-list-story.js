import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  scenarios: {
    constant_rps: {
      executor: 'constant-arrival-rate',
      rate: 500, // 500 RPS
      timeUnit: '1s', // per second
      duration: '1m', // test duration
      preAllocatedVUs: 500, // enough to sustain the load
      maxVUs: 1000, // max VUs in case of spikes
    },
  },
};

const url = 'https://api.admin.u-code.io/v2/invoke_function/alpha-get-list-story';

const params = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiIiLCJjbGllbnRfcGxhdGZvcm1faWQiOiIiLCJjbGllbnRfdHlwZV9pZCI6IjY2NTM3MGFmLWRlOTAtNDVjNy05YWUwLWVjMjFiZmU0ZDQxNCIsImRhdGEiOiJNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xNV83KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTM1LjAuMC4wIFNhZmFyaS81MzcuMzYiLCJleHAiOjE3NDUzMjIwMTUsImlhdCI6MTc0NTIzNTYxNSwiaWQiOiIxM2FhZTNlZC1mNmE2LTRkMjYtODcyZi04MzNhYjYxY2EzMGMiLCJpcCI6IjEwLjI0NC4xNS4yMTcvMzIiLCJsb2dpbl90YWJsZV9zbHVnIjoiZW1wbG95ZWVfMzYwIiwicHJvamVjdF9pZCI6ImMxOWExNWY4LTY1MzMtNGQ2Yy1hOWRiLTA0NGIxZTA4OTFhMiIsInJvbGVfaWQiOiJjY2ZhNGFjYy03NDU1LTQ3ZTktOTczZi0wMGUxYjI3MDllOTAiLCJ0YWJsZXMiOltdLCJ1c2VyX2lkIjoiNTg1ZDM2ZWEtOTdmOS00ZDFjLTg4OWEtMDU4M2RiYTgwNjU4IiwidXNlcl9pZF9hdXRoIjoiNzUyNjBkM2UtMDAyZi00ODA4LTlhNDktNjEwOTY3NGI0NTUxIn0.lUN3rcQY69EaM-W1w_lGcOHnv8Z8v9Ht5XYqfY2EhjU',
  },
};

export default function () {
  const payload = JSON.stringify({
    data: {
      story_language: 'ru',
      company_id: 'e61eea34-f954-4081-877e-b93ae5b4b25z',
    },
  });

  const res = http.post(url, payload, params);

  check(res, {
    'status is 201': (r) => r.status === 201,
  });
}
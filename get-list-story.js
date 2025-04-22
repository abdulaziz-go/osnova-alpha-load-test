// get-list-story.js
import http from 'k6/http';
import { check } from 'k6';
import { options as sharedOptions, params } from './config.js';

export const options = sharedOptions;

const url =
    'https://api.admin.u-code.io/v2/invoke_function/alpha-get-list-story';

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
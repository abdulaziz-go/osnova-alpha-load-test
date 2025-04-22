// get-list-content.js
import http from 'k6/http';
import { check } from 'k6';
import { options as sharedOptions, params } from './config.js';

export const options = sharedOptions;

const url = 'https://api.admin.u-code.io/v2/invoke_function/alpha-get-list-content';

export default function () {
    const payload = JSON.stringify({
        data: {
            content_language: ['ru'],
        },
    });

    const res = http.post(url, payload, params);

    check(res, {
        'is status 201': (r) => r.status === 201,
    });
}
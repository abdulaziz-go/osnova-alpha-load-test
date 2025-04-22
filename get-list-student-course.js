// get-list-student-course.js
import http from 'k6/http';
import { check } from 'k6';
import { options as sharedOptions, params } from './config.js';

export const options = sharedOptions;

const url = 'https://api.admin.u-code.io/v2/invoke_function/alpha-get-list-student-course';

export default function () {
    const payload = JSON.stringify({
        limit: 20,
        offset: 0,
        data: {
            course_language: ['ru'],
            course_type: ['my_course'],
        },
    });

    const res = http.post(url, payload, params);

    check(res, {
        'status is 201': (r) => r.status === 201,
    });
}
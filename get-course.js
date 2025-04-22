// get-course-knative.js
import http from 'k6/http';
import { check } from 'k6';
import { options as sharedOptions, params } from './config.js';

export const options = sharedOptions;

const url = 'https://api.admin.u-code.io/v2/invoke_function/alpha-get-course-knative';

export default function () {
    const payload = JSON.stringify({
        data: {
            course_id: '595db8df-07a0-45d4-926d-72456753633a',
            employee_360_id: '585d36ea-97f9-4d1c-889a-0583dba80658',
            from_introduction: true,
        },
    });

    const res = http.post(url, payload, params);

    check(res, {
        'status is 200': (r) => r.status === 200,
    });
}
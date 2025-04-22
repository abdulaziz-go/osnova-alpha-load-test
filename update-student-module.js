import http from 'k6/http';
import { check } from 'k6';
import { options as sharedOptions, params } from './config.js';

export const options = sharedOptions;
const url = 'https://api.admin.u-code.io/v2/invoke_function/alpha-update-student-module-knative';

export default function () {
  const payload = JSON.stringify({
    data: {
      object_data: {
        course_id: '2ac5d43f-e1b6-4acc-b715-d2a2002d713c',
        student_course_id: '9b90d28e-bcc2-464b-9adb-c2e26a69f82e',
        module_id: 'ea6c2e4f-5b28-4592-bcfb-c154d57ab081',
        lesson_id: '115c04c8-f309-49b0-bdaa-9a37148cae05',
        employee_360_id: '585d36ea-97f9-4d1c-889a-0583dba80658',
      },
    },
  });

  const res = http.post(url, payload, params);

  check(res, {
    'status is 201': (r) => r.status === 201,
  });
}
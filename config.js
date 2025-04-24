// config.js
export const options = {
    scenarios: {
        constant_rps: {
            executor: 'constant-arrival-rate',
            rate: 500,
            timeUnit: '1s',
            duration: '1m',
            preAllocatedVUs: 500,
            maxVUs: 1000,
        },
    },
};

export const params = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'API-KEY',
        'X-API-KEY': 'P-RR0tgRSeiCFgcjfrAO4TOodRwJUd6KzP',
    },
};

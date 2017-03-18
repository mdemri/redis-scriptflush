const Redis = require('ioredis');
const _ = require('lodash');

const debugStrs = ''
const connStrs = process.env.CONN_STRS || debugStrs;


new Redis(debugStrs).script('FLUSH')
    .then((x) => {
        console.log(x);
        process.exit(0);
    })
    .catch((x) => {
        console.log(x);
        process.exit(1);
    });
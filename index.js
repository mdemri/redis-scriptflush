const Redis = require('ioredis');
const _ = require('lodash');

const debugStrs = ''
const connStrs = process.env.CONN_STRS || debugStrs;

const ConnectionStrings = connStrs.split(',');
const arr = _.map(ConnectionStrings, x => new Redis(x));
Promise.all(_.map(arr, x => x.script('FLUSH')))
    .then((x) => {
        console.log(x);
        process.exit(0);
    })
    .catch((x) => {
        console.log(x);
        process.exit(1);
    });
const Redis = require('ioredis');
const _ = require('lodash');

const debugStrs = ''
const connStrs = process.env.CONN_STRS || debugStrs;

const ConnectionStrings = connStrs.split(',');

Promise.all(_.map(ConnectionStrings, x => new Redis(x).script('FLUSH'))).then(x => console.log(x));
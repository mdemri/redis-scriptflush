const Redis = require('ioredis');
const _ = require('lodash');

const debugStrs = 'redis-17849.c3.eu-west-1-1.ec2.cloud.redislabs.com:17849'
// ,redis-11997.c3.eu-west-1-1.ec2.cloud.redislabs.com:11997,redis-16160.c3.eu-west-1-1.ec2.cloud.redislabs.com:16160,redis-14770.c3.eu-west-1-1.ec2.cloud.redislabs.com:14770,redis-17419.c3.eu-west-1-1.ec2.cloud.redislabs.com:17419,redis-12455.c3.eu-west-1-1.ec2.cloud.redislabs.com:12455'
const connStrs = process.env.CONN_STRS || debugStrs;


new Redis(debugStrs).script('FLUSH').then((x) => {
    console.log(x);
    process.exit(0);
});

// const ConnectionStrings = connStrs.split(',');
// const arr = _.map(ConnectionStrings, x => new Redis(x));
// Promise.all(_.map(arr, x => x.script('FLUSH'))).then(x => console.log(x));
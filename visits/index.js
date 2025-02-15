const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    host: 'redis-server', //as specified in docker-compose.yaml service name
    port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
    process.exit(1);
    client.get('visits', (error, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    })
})

app.listen(8081, () => {
    console.log('listening on port 8081');
})
var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://192.168.1.9');

client.publish('topic', 'Hello from Node.js');

client.end();

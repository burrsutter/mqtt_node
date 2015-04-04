var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://192.168.3.3');

client.publish('topic', 'Hello from Node.js');

client.end();

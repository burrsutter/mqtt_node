var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://192.168.1.9');

client.subscribe('topic');
client.publish('topic', 'Hello from Node.js');

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
});

client.end();

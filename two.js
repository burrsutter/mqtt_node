var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://192.168.3.3');

client.subscribe('presence');
client.publish('presence', 'Hello mqtt');

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
});

client.end();

const amqp = require('amqplib');
const axios = require('axios');

const QUEUE = 'led_control';

async function consume() {
  const conn = await amqp.connect('amqp://localhost');
  const ch = await conn.createChannel();
  await ch.assertQueue(QUEUE);

  ch.consume(QUEUE, async (msg) => {
    if (msg !== null) {
      const state = msg.content.toString();
      console.log('Received:', state);

      // Replace with actual API call to control LED
      //await axios.post('http://your-api/led', { state });
      console.log('Here the API call would be made to control the LED:', state);
      
      ch.ack(msg);
    }
  });
}

consume();

const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const producer = require('./producer');


require('./consumer'); // starts the consumer in the same Node process


app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend')));

app.post('/led', async (req, res) => {
  const { state } = req.body;
  await producer.sendToQueue(state);
  res.send({ status: 'Message sent to queue', state });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

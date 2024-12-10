const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', async (req, res) => {
  const data = req.body;
  try {
    await processData(data);
    res.status(200).send('Data received and processed successfully');
  } catch (error) {
    console.error('Error processing data:', error);
    res.status(500).send('Error processing data');
  }
});

async function processData(data) {
  // Simulate an asynchronous operation
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Processing data:', data);
  // Simulate a potential error
  // if (!data.name) { throw new Error('Data missing required field: name'); }
  // ... further data processing ...
}

app.listen(3000, () => console.log('Server listening on port 3000'));
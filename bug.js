const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data asynchronously, but don't await the result
  processData(data);
  res.status(200).send('Data received');
});

async function processData(data) {
  // Simulate an asynchronous operation
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Processing data:', data);
  // ...potential error in processing ...
}

app.listen(3000, () => console.log('Server listening on port 3000'));
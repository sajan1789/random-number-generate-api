

const express = require('express');
const cors=require("cors")

const app = express();

app.use(cors())

app.get('/api/random-number', (req, res) => {

  const randomNumber = Math.floor(Math.random() * (600 - 100 + 1)) + 100;

  
  res.json({ randomNumber });
});


const PORT =  5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
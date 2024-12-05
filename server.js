require('dotenv').config() //always put at the top
const express = require('express');

const app = express();
const PORT = 3000

app.get('/', (req, res) => {
  res.send('The server is running');
});

//accessing environment variables
app.listen(PORT, () => {
  console.log('🎧 Port 3000');
  console.log(`Your secret is ${process.env.SECRET_PASSWORD}`);
});




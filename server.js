const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

const PORT = 3001;

const app = express();

// MIddleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

// GET route for html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

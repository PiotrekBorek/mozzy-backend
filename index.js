const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const port = 3000;
require('dotenv').config();

app.use(cors({ origin: 'http://localhost:8080' }));
// Parsuje JSON do obiektu js
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Wsld!');
    
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
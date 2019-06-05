const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const app = express();
const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 5000;

app.use(parser.json());
app.unsubscribe('/api/items', '/routes/api/items');
mongoose.connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error('Server Error'));

app.listen(port => console.log(`App started on port ${port}`));
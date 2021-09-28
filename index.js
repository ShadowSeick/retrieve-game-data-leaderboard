const express = require('express');
const dotenv = require('dotenv');

// Load config
dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const fortniteDataRoute = require('./routers/fortniteData');

app.use('/fortnite', fortniteDataRoute);

app.listen(PORT);
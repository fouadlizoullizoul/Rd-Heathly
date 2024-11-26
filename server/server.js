const express =require('express');
const app = express();
require('dotenv').config()
const dbConfig = require('./config/dbConfig')
const port =process.env.PORT || 50000;
app.listen(port,()=>console.log(`Listening on ${port}`));
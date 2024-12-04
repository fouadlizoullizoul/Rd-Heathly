const express =require('express');
const app = express();
require('dotenv').config()
const dbConfig = require('./config/dbConfig');
app.use(express.json());
const userRoute=require('./routes/userRoute')
const adminRoute=require('./routes/adminRoute');
const doctorRoute=require('./routes/doctorsRoute')
const cors = require("cors");
app.use(cors({
    origin: "http://localhost:3000", // نطاق الواجهة الأمامية
    methods: ["GET", "POST", "PUT", "DELETE"],
  }));
app.use('/api/user',userRoute);
app.use('/api/admin',adminRoute);
app.use('/api/doctor',doctorRoute);
const port =process.env.PORT || 5000;

// Connect to MongoDB
app.listen(port,()=>console.log(`Listening on ${port}`));
require('dotenv').config();
const express = require('express');
const { connectToMongoDB } = require('./connection');
const cors = require("cors");
const urlRoute = require('./routes/url');
const userRoute= require('./routes/user');
const {restrictToLoggedinUserOnly}= require('./middlewares/auth');
const cookieParser = require('cookie-parser');


// connection to mongoDB
connectToMongoDB(process.env.MONGODB_URI);

const app = express();

// Middlewares
app.use(cors({
    origin: '*',
	// credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cookieParser());
app.use('/url',restrictToLoggedinUserOnly, urlRoute);
app.use('/user',userRoute);
app.route('/',(req, res) => {
    res.json({status: "fit"})
})


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server Started at PORT ${PORT}`);
})

module.exports = app;
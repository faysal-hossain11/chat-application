const express =  require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
dotenv.config();


// connection with mongodb compass
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("database connection successfully!"))
.catch((err) => console.log(err))


// request parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// set view engine 
app.set("view ingine", "ejs");


// set static folder
app.use(express.static(path.join(__dirname, "public")))


// parser cookies 
app.use(cookieParser(process.env.COOKIE_SECRET))


// routing setup


// error handling




// app listen
app.listen(process.env.PORT, () => {
    console.log(`start the server at ${process.env.PORT}`);
})
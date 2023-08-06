const express = require('express');
const  bodyParser = require('body-parser');
const route = require('./route/route.js');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const app = express();        
const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors');
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//3pn3oii9geq4SIWk
mongoose.connect("mongodb+srv://komalbansod_04:3pn3oii9geq4SIWk@komal04.fvnel.mongodb.net/pockman", {useNewUrlParser: true})
    .then(() => console.log('MongoDb Connected'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3001, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});
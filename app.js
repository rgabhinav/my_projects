const express = require('express');
const app = express();
const port = 3000;
const db = require('./config/mongoose-connection')

require('dotenv').config();

const indexRouter = require('./routes/index-router');
const userRouter = require('./routes/user-router');
const path = require('path');

app.set('view engine', "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}`);
});
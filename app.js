const express = require('express');
const app = express();
const port = 3000;
const db = require('./config/mongoose-connection')
const config = require('config')

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

app.get('/create', function(){
    res.send('New user created')
});

// app.listen(process.env.PORT || port, () => {
//     console.log(`Server is running on port ${port}`);
// });

app.listen(config.get("PORT")); //this is the second method using config

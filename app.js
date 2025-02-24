const express = require('express');
const app = express();
const port = 3000;
const indexRouter = require('./routes/index-router');
const userRouter = require('./routes/user-router');
const path = require('path');

app.use('/', indexRouter);
app.use('/user', userRouter);
app.set('view engine', "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}`);
});
const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
    res.send(`Running on port ${port}`);
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}`);
});
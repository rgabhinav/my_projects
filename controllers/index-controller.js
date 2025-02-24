const randomUsername = require('../utils/random-username');

module.exports.homeController = function (req, res) {
    let name = randomUsername();
    res.render('index', { name });
};


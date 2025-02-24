module.exports = function(req, res, next) {
    console.log('isLoggedin middleware');
    next();
};
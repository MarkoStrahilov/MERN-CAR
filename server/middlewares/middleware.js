module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/sign-in')
    }
    next()
}

module.exports.asyncErrorHandle = (fn) => {
    return function(req, res, next) {
        fn(req, res).catch(e => next(e))
    }
}
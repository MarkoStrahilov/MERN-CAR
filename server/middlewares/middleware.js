module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.status(401).send({
            status: 'fail',
            message: 'Access denied, unauthorized'
        })
    }
    next()
}

module.exports.asyncErrorHandle = (fn) => {
    return function(req, res, next) {
        fn(req, res).catch(e => next(e))
    }
}
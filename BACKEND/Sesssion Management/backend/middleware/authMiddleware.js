const isAuthenticated = (req, res, next) => {
    if(req.session.user) {
        return next() // call the next middleware if authenticated
    } else {
        res.send('You have not logged in')
    }
}

module.exports = isAuthenticated
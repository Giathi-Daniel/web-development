exports.getProfile = (req, res) => {
    if(req.session.user) {
        const user = req.session.user
        res.send(`<p>User: ${user.name} ~ ${user.email} from ${user.country}</p>`)
    } else {
        res.send('No user info found')
    }
}


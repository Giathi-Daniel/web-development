const User = require('../models/User');

exports.signup = async (req, res) => {
    const { email, password, name } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            return res.status(409).send('User already exists');
        }

        // Create and save the new user
        const user = new User(email, password, name);
        await user.save();
        res.status(201).send('User created successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findByEmail(email);
        if (!user) {
            return res.status(401).send('Invalid credentials');
        }

        const isValid = await User.validatePassword(password, user.password);
        if (!isValid) {
            return res.status(401).send('Invalid credentials');
        }

        req.session.user = { name: user.name, email: user.email };
        res.send('Successfully logged in');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error('Error destroying session:', err);
            res.send('Error logging out.');
        } else {
            res.send('Logged out successfully.');
        }
    });
};

exports.getDashboard = (req, res) => {
    if (req.session.user) {
        const user = req.session.user;
        res.send(`User: ${user.name} ~ ${user.email}`);
    } else {
        res.status(401).send('No user info found');
    }
};

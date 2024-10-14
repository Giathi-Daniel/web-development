const bcrypt = require('bcrypt');
const pool = require('../config/db');

class User {
    constructor(email, password, name) {
        this.email = email;
        this.password = password; // Raw password
        this.name = name;
    }

    static async hashPassword(password) {
        return await bcrypt.hash(password, 10);
    }

    static async validatePassword(inputPassword, storedHash) {
        return await bcrypt.compare(inputPassword, storedHash);
    }

    // Create a new user in the database
    async save() {
        const hashedPassword = await User.hashPassword(this.password);
        const query = 'INSERT INTO users (email, password, name) VALUES (?, ?, ?)';
        return new Promise((resolve, reject) => {
            pool.query(query, [this.email, hashedPassword, this.name], (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });
    }

    // Find user by email
    static async findByEmail(email) {
        const query = 'SELECT * FROM users WHERE email = ?';
        return new Promise((resolve, reject) => {
            pool.query(query, [email], (error, results) => {
                if (error) {
                    return reject(error);
                }
                if (results.length === 0) {
                    return resolve(null);
                }
                resolve(results[0]); // Return the first user found
            });
        });
    }
}

module.exports = User;

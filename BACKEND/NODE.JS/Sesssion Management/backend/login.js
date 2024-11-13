// on succussful login
req.session.user = { name: dbRecord.username, email: dbRecord.email}
// in other routes access the user session so that you can have the user details
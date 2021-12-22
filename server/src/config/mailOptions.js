/** Remember to insert this file into .gitignore */
var mailOptions = {
    service: "service",
    auth: {
        user: 'email',
        pass: 'password'
    },
    receiver: 'receiver'
}

module.exports = { mailOptions }
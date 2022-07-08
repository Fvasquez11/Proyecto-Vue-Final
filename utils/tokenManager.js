const jwt = require('jsonwebtoken')
const JWT_SECRET = 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ'
const expiresIn = 60 * 15;

const generateToken = (uid) => {
    try {
        const token = jwt.sign({uid}, JWT_SECRET, {expiresIn})
        return {token, expiresIn}
    } catch (error) {
        console.log(error)
    }
}

module.exports = generateToken
const jwt = require('jsonwebtoken')
const expiresIn = 60 * 15;

const generateToken = (uid) => {
    try {
        const token = jwt.sign({uid}, process.env.JWT_SECRET, {expiresIn})
        return {token, expiresIn}
    } catch (error) {
        console.log(error)
    }
}

module.exports = generateToken
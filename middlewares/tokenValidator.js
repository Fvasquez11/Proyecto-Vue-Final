const jwt = require('jsonwebtoken')

const tokenValidator = (req, res, next) => {
    try {
        let cookie = req.cookies
        if(!cookie) throw new Error('No existe el token en las cookies')
        const { uid } = jwt.verify(cookie.token, process.env.JWT_SECRET)
        req.uid = uid
        next()
    } catch (error) {
        return res.status(401).json({error: error.message})
    }
}

module.exports = tokenValidator
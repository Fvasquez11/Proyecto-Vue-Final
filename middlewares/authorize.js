const User = require('../models/UserModel')

const authorizeUser = (req, res, next) => {
    try {
        const user = await User.findById(req.uid).populate('roles')
        if(!user) return res.status(403).json({error: "No existe el usuario"})
        if(req.params.username){
            if(user.roles.some(role => role.name === 'user') && req.params.username === user.username){
                next()
            }
            if (user.roles.some(role => role.name === 'admin')){
                next()
            }
            else{
                throw new Error('No esta autorizado')
            }
        }
        else {
            if (user.roles.some(role => role.name === 'admin')){
                next()
            }
            else{
                throw new Error('No esta autorizado')
            }
        }
    } catch (error) {
        return res.status(401).json({error: error.message})
    }
}

exports.authorizeUser = authorizeUser;
exports.authorizeAdmin = authorizeAdmin;
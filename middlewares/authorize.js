const User = require('../models/UserModel')
const Role = require('../models/RoleModel')

const authorizeUser = (req, res, next) => {
    try {
        const user = await User.findById(req.uid).populate('roles')
        if(!user) return res.status(403).json({error: "No existe el usuario"})
        if(!user.roles.some(role => role.name === 'user')) 
            return res.status(400).json({error: "No tiene permisos de usuario"})
        next()
    } catch (error) {
        return res.status(401).json({error: error.message})
    }
}
const authorizeAdmin = (req, res, next) => {
    try {
        const user = await User.findById(req.uid).populate('roles')
        if(!user) return res.status(403).json({error: "No existe el usuario"})
        if(!user.roles.some(role => role.name === 'admin'))
            return res.status(400).json({error: "No tiene permisos de administrador"})
        next()
    } catch (error) {
        return res.status(401).json({error: error.message})
    }
}

exports.authorizeUser = authorizeUser;
exports.authorizeAdmin = authorizeAdmin;
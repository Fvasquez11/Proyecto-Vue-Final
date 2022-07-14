const User = require('../models/UserModel')

const authorizeUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.uid).populate('roles')
        if(!user) return res.status(403).json({error: "No existe el usuario"})
        if(req.params.username){
            if(user.roles.some(role => role.name === 'user') && req.params.username === user.username){
                console.log("autorizado1")
                next()
                return
            }
            if (user.roles.some(role => role.name === 'admin')){
                console.log("autorizado2")
                next()
                return
            }
            else{
                console.log("Error")
                throw new Error('No esta autorizado')
            }
        }
        else {
            if (user.roles.some(role => role.name === 'admin')){
                console.log("Autorizado 3")
                next()
                return
            }
            else{
                console.log("Error 2")
                throw new Error('No esta autorizado')
            }
        }
    } catch (error) {
        return res.status(401).json({error: error.message})
    }
}

module.exports = authorizeUser
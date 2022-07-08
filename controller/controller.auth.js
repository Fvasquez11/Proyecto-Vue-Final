const User = require('../models/UserModel')
const generateToken = require('../utils/tokenManager')

const register = async (req, res) => {
    const {username, password} = req.body
    try {
        const user = new User({username, password})
        await user.save()
        return res.status(201).json({ok: true})
    }
    catch(error) {
        if(error.code === 11000){
            return res.status(400).json({error: 'Ya existe este usuario'})
        }
        return res.status(500).json({error: "Error de servidor"})
    }
}

const login = async (req, res) => {
    const {username, password} = req.body
    try { 
        let user = await User.findOne({username});
        if(!user) return res.status(403).json({error: 'No existe el usuario'});
        const correctPassword = await user.comparePassword(password);
        if(!correctPassword) return res.status(403).json({error: 'Contraseña incorrecta'});
        const {token, expiresIn} = generateToken(user.id)
        return res.json({token, expiresIn});
    }
    catch(error) {
        console.log(error)
    }
}

exports.register = register
exports.login = login
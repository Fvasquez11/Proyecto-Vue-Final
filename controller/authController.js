const User = require('../models/UserModel')
const Role = require('../models/RoleModel')
const generateToken = require('../utils/tokenManager')

const register = async (req, res) => {
    const { username, password, roles } = req.body
    try {
        const user = new User({ username, password })
        if (roles) {
            const foundRoles = await Role.find({name: {$in: roles}})
            user.roles = foundRoles.map(role => role.id)
        }
        else {
            const defaultRole = await Role.findOne({name: 'user'})
            user.roles = [defaultRole.id]
        }
        await user.save()
        return res.status(201).json({ ok: "Usuario creado" })
    }
    catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Ya existe este usuario' })
        }
        return res.status(500).json({ error: "Error de servidor" })
    }
}

const login = async (req, res) => {
    const { username, password } = req.body
    try {
        let user = await User.findOne({ username }).populate('roles');
        if (!user) return res.status(403).json({ error: 'No existe el usuario' });
        const correctPassword = await user.comparePassword(password);
        if (!correctPassword) return res.status(403).json({ error: 'Contraseña incorrecta' });
        const userRoles = user.roles.map(rol => rol.name)
        const { token, expiresIn } = generateToken(user.id)
        return res.json({ userRoles, token, expiresIn });
    }
    catch (error) {
        console.log(error)
    }
}

// const infoUser = async (req, res) => {
//     try {
//         const user = await User.findOne({username: req.params.username}).populate('roles')
//         return res.json({ username: user.username, roles: user.roles })
//     } catch (error) {
//         return res.status(500).json({ error: "Error de servidor" })
//     }
// }

exports.register = register
exports.login = login
//exports.infoUser = infoUser
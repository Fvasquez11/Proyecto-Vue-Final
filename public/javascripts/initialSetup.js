const Role = require('../../models/RoleModel')
const User = require('../../models/UserModel')

const createRoles = async () => {
    try {
        const count = await Role.estimatedDocumentCount()
        if (count > 0) return;
        await Promise.all([
            new Role({ name: 'user' }).save(),
            new Role({ name: 'admin', }).save()
        ])
    } catch (error) {
        console.error(error)
    }
}

const createAdmin = async () => {
    try {
        const adminRole = await Role.findOne({name: 'admin'})
        const user = await User.findOne({username: 'admin'})
        if(!user) {
            const adminUser = new User({username: 'admin', password: 'admin'});
            adminUser.roles = [adminRole.id];
            adminUser.save();
        }    
    } catch (error) {
        console.error(error)
    }
}

exports.createRoles = createRoles
exports.createAdmin = createAdmin

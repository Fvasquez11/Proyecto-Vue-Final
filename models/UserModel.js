const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require("bcrypt")

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.pre("save", async function(next){
    const user = this
    if(!user.isModified('password')) return next()
    try {
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)
    }
    catch(error) {
        throw new error('Fallo el hash de contraseña')
    }
})

userSchema.methods.comparePassword = async function(clientPassword){
    return await bcrypt.compare(clientPassword, this.password)
}

module.exports = mongoose.model('User', userSchema);
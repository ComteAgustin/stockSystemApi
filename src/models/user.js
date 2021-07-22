// Import mongoose and bcrypt
const { model, Schema } = require('mongoose')
const { genSalt, hash, compare } = require('bcrypt')

// Schema
const userSchema = new Schema({
    name: {
        type: String,
        unique: true
    },

    lastName: {
        type: String,
        unique: false
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        type: Schema.Types.ObjectId,
        ref: 'roles'
    }]
}, {
    versionKey: false
})

userSchema.statics.encryptPassword = async password => {
    const salt = await genSalt(10)
    return await hash(password, salt)
}

userSchema.statics.comparePasswords = async(password, receivePassword) => {
    return await compare(password, receivePassword)
}

// Export model
module.exports = model('user', userSchema)
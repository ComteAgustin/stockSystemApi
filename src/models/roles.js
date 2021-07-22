// Require mongoose
const {Schema, model} = require('mongoose')

// Schema
const rolesSchema = new Schema({
    name: {
        type: String
    }
},{
    versionKey: false
})

// Export model
module.exports = model('roles', rolesSchema)
// Import mongoose
const  {Schema, model} = require('mongoose')

// Schema
const providersSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    identification: {
        type: Number,
        unique: true
    },
    phone: {
        type: Number,
        unique: true
    },
    documentType: {
        type: String
    }
},{
    versionKey: false
})

// Export model 
module.exports = model('provider', providersSchema)
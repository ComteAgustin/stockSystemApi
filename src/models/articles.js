// Import moongose
const {Schema, model} = require('mongoose')

// Schema
const articleSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    measure: {
        type: String
    },
    stock: {
        type: Number,
        default: 0
    }}, {
        versionKey: false
    })

// Export model 
module.exports = model('article', articleSchema)
// Import Mongoose
const {Schema, model} = require('mongoose')

// Schema
const salesSchema = new Schema({
    articleID: {
        type: String
    },
    quantity: {
        type: Number
    },
    amount: {
        type: Number
    }
},{
    timestamps: true,
    versionKey: false
})

// Export modal
module.exports = model('sales', salesSchema)
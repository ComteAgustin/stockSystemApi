// Import Mongoose
const {Schema, model} = require('mongoose')

// Schema
const purchasesSchema = new Schema({
    articleID: {
        type: String 
    },
    providerID: {
        type: String
    },
    quantity: {
        type: Number
    },
    amount: {
        type: Number
    },
    receipt: {
        type: String
    }, 
    receiptNumber: {
        type: Number
    }

},{
    timestamps: true,
    versionKey: false
})

// Export modal
module.exports = model('purchases', purchasesSchema)


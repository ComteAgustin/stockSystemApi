// Require
const Purchases = require('../models/purchases.js') 

// Controllers
const ctrl = {}

// Create
ctrl.createPurchases = async (req, res) => {
    // Get data from the client
    const {articleID, providerID, quantity, amount, receipt, receiptNumber} = req.body

    // Create a new purchase
    const purchase = await new Purchase({
        articleID, 
        providerID, 
        quantity, 
        amount, 
        receipt, 
        receiptNumber
    })

    // Uploading the new purchase
    const savedPurchase = await purchase.save()

    // Return
    return res.status(201).json(savedPurchase)
}

// Read
ctrl.getPurchases = async (req, res) => {
    // Get all the purchases
    const purchases = await Purchases.find()

    // Return
    return res.status(200).json(purchases)
}

ctrl.getPurchasesById = async (req, res) => {
    // Get purchase by id
    const purchase = await Purchase.findById(req.params.purchaseid)

    // Validate if the purchase exist
    if(!purchase) res.send(404).json({message: 'purchase not found'})

    // Return
    return res.status(200).json(article)
}

// Update
ctrl.updatePurchases = async (req, res) => {
    // Get purchase by id and update with the data in req body
    const purchase = await Purchases.findByIdAndUpdate(req.params.purchaseid, req.body, {new: true})

    // Validate if the purchase exist
    if(!purchase) res.send(404).json({message: 'purchase not found'})

    // Return
    return res.status(201).json(purchase)}

// Delete
ctrl.deletePurchases = async (req, res) => {
    // Get purchase with id and delete this purchase
    const purchase = await Purchases.findByIdAndDelete(req.params.purchaseid)
    
    // Validate if the purchase exist
    if(!purchase) res.status(404).json({message: 'purchase not found'})

    // Return
    return res.status(204).json({message: 'article just be removed'})
}

// Export
module.exports = ctrl
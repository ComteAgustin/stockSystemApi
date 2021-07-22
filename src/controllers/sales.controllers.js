// Require
const Sales = require('../models/sales.js') 

// Controllers
const ctrl = {}

// Create
ctrl.createSales = async (req, res) => {
    // Get data from the client
    const {articleID, quantity, amount} = req.body

    // Create a new sale
    const sale = await new Purchase({
        articleID,      
        quantity, 
        amount
    })

    // Uploading the new sale
    const savedSale = await sale.save()

    // Return
    return res.status(201).json(savedSale)
}

// Read
ctrl.getSales = async (req, res) => {
    // Get all the sales
    const sales = await Sales.find()

    // Return
    return res.status(200).json(sales)
}

ctrl.getSalesById = async (req, res) => {
    // Get sale by id
    const sale = await Sale.findById(req.params.saleid)

    // Validate if the sale exist
    if(!sale) res.send(404).json({message: 'sale not found'})

    // Return
    return res.status(200).json(sale)
}

// Update
ctrl.updateSales = async (req, res) => {
    // Get sale by id and update with the data in req body
    const sale = await Sales.findByIdAndUpdate(req.params.saleid, req.body, {new: true})

    // Validate if the sale exist
    if(!sale) res.send(404).json({message: 'sale not found'})

    // Return
    return res.status(201).json(sale)
}

// Delete
ctrl.deleteSales = async (req, res) => {
    // Get sale with id and delete this sale
    const sale = await Sales.findByIdAndDelete(req.params.saleid)
    
    // Validate if the sale exist
    if(!sale) res.status(404).json({message: 'sale not found'})

    // Return
    return res.status(204).json({message: 'sale just be removed'})
}

// Export
module.exports = ctrl
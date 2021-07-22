// Require
const Provider = require('../models/providers')

// Controllers
const ctrl = {}

// Create
ctrl.createProvider = async (req, res) => {
    // Get the data into the body req
    const {name, identification, documentType, phone} = req.body

    // Create a new provider
    const provider = await new Provider({
        name, 
        identification,
        documentType,
        phone
    })

    // Upload new provider
    const savedProvider = await provider.save() 

    // Return
    return res.status(204).json(savedProvider)
}

// Read
ctrl.getProvider = async (req, res) => {
    // Get Providers
    const providers = await Provider.find()

    // Return
    return res.status(200).json(providers)
}

ctrl.getProviderById = async (req, res) => {
    // Get provider by id
    const provider = await Provider.findById(req.params.providerid)

    // Validate
    if(!provider) res.status(404).json({message: 'provider not found'})

    // Return 
    return res.status(200).json(provider)
}

// Update
ctrl.updateProvider = async (req, res) => {
    // Get provider and update
    const provider = await Provider.findByIdAndUpdate(req.params.providerid, req.body, {new: true})

    // Validate
    if(!provider) res.status(404).json({message: 'provider not found'})

    // Return
    return res.status(201).json(provider)
}

// Delete
ctrl.deleteProvider = async (req, res) => {
    // Get provider and delete
    const provider = await Provider.findByIdAndDelete(req.params.providerid)

    // Validate
    if(!provider) res.status(404)-json({message: 'provider not found'})

    // Return
    return res.status(204).json({message: 'provider was deleted'})
}

// Export 
module.exports = ctrl
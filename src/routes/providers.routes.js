// Requires
const {Router} = require('express')
const router = Router()

const ctrl = require('../controllers/providers.controllers')

// End Points
router.post('/api/provider', ctrl.createProvider)

router.get('/api/provider', ctrl.getProvider)
router.get('/api/provider/:providerid', ctrl.getProviderById)

router.put('/api/provider/:providerid', ctrl.updateProvider)

router.delete('/api/provider/:providerid', ctrl.deleteProvider)

// Export
module.exports = router
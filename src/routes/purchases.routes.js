// Require
const {Router} = require('express')
const router = Router()

const ctrl = require('../controllers/purchases.controllers')

// End Points
router.post('/api/purchases', ctrl.createPurchases)

router.get('/api/purchases', ctrl.getPurchases)
router.get('/api/purchases/:purchaseid', ctrl.getPurchasesById)

router.post('/api/purchases/:purchaseid', ctrl.updatePurchases)

router.post('/api/purchases/:purchaseid', ctrl.deletePurchases)

// Export
module.exports = router
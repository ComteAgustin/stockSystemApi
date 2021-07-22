// Require
const {Router} = require('express')
const router = Router()

const ctrl = require('../controllers/sales.controllers')

// End Points
router.post('/api/sales', ctrl.createSales)

router.get('/api/sales', ctrl.getSales)
router.get('/api/sales/:saleid', ctrl.getSalesById)

router.post('/api/sales/:saleid', ctrl.updateSales)

router.post('/api/sales/:saleid', ctrl.deleteSales)

// Export
module.exports = router
// Require
const {Router} = require('express')
const router = Router()

const ctrl = require('../controllers/auth.controller')

// End Points

router.post('/api/signin', ctrl.signin)
router.post('/api/signup', ctrl.signup)

// Export
module.exports = router
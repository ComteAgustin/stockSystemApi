// Import 
const { Router } = require("express")
const ctrl = require('../controllers/user.controller')
const { verifyToken, isAdmin } = require('../middlewares')

// Init router
const router = Router()

// End Points
router.post('/api/user', ctrl.createUser)

router.get('/api/user', [verifyToken, isAdmin], ctrl.getUser)

router.put('/api/user/:userid', ctrl.updateUser)

router.delete('/api/user/:userid', ctrl.deleteUser)


// Export
module.exports = router
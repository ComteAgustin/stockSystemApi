// Require
const {Router} = require('express')
const router = Router()

const ctrl = require('../controllers/articles.controllers')

// End Points
router.post('/api/articles', ctrl.createArticle)

router.get('/api/articles', ctrl.getArticle)
router.get('/api/articles/:articleid', ctrl.getByIdArticle)

router.put('/api/articles/:articleid', ctrl.updateArticle)

router.delete('/api/articles/:articleid', ctrl.deleteArticle)
// Export
module.exports = router
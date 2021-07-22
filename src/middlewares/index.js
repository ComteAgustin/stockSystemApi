// Require Middlewares
const {isAdmin, verifyToken} = require('./auth')

// Export 
module.exports = {isAdmin, verifyToken}
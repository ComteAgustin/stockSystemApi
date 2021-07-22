// Require
const jwt = require('jsonwebtoken')
const config = require('../config')
const User = require('../models/user')
const Role = require('../models/roles')

// VerifyToken
const verifyToken = async(req, res, next) => {
    try {
        // Get access-token from headers request
        const token = req.headers['x-access-token']

        // Verify if the token exist
        if (!token) res.status(400).json({ message: 'not token provided' })

        // Decode token
        const decode = jwt.verify(token, config.secret)

        // Find user by id
        const user = await User.findById(decode.id, { password: 0 })

        // Validate user
        if (!user) res.status(404).json({ message: 'user not found' })

        // Continue
        req.body.user = user
        next()

    } catch (error) {
        res.status(400).json({ message: 'incorrect token' })
    }
}

// IsAdmin
const isAdmin = async(req, res, next) => {
    try {
        // Get the user Role
        const role = await Role.findById({ _id: req.body.user.roles[0] })

        // Validate if the user role is admin
        if (role.name !== 'admin') res.status(400).json({ message: 'unauthorized' })
        console.log(role.name)

        // Continue
        next()
    } catch (error) {
        console.error(error)
    }
}

// Export 
module.exports = { verifyToken, isAdmin }
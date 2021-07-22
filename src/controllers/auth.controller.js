// Require
const jwt = require('jsonwebtoken')
const User = require('../models/user') 
const config = require('../config')

// Controller
const ctrl = {}

// Signin
ctrl.signin = async (req, res) => {
    try {
        // Get user with the same name that the body user
        const userVerify = await User.findOne({name: req.body.name})

        // Validate if the user exist
        if(!userVerify) res.status(400).json({message: 'bad credentials'})
        
        // Compare the password of the user in the database and the password sent in the body
        const matchPassword = await User.comparePasswords(req.body.password, userVerify.password)

        // VAlidate the passoword is wrong
        if(!matchPassword) res.status(401).json({message: 'bad credentials'})
        
        // Creating a jwt
        const token = jwt.sign({id: userVerify.id}, config.secret, {
            expiresIn: 86400 // 24 hours
        })
        
        // Return
        return res.status(200).json({token})
        
    } catch (error) {
        console.error(error)
    }
}

// Signup
ctrl.signup = (req, res) => {
    res.json({message: 'signup'})
}

// Export
module.exports = ctrl 
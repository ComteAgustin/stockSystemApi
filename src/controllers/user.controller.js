// Import
const User = require('../models/user')
const Roles = require('../models/roles')

// Controllers
const ctrl = {}

// Create
ctrl.createUser = async(req, res) => {
    try {
        // Receive data from the client
        const { name, lastName, password, roles } = req.body

        // Creating a new user
        const user = await new User({
            name,
            lastName,
            password
        })

        // Asign roles
        if (roles) {
            // Asing roles that was sent in the body
            const rolesFound = await Roles.find({ name: roles[0] })
            user.roles = rolesFound.map(role => role._id)
        } else {
            // If roles doesn't be sent, auto asign user
            const userRole = await Roles.findOne({ name: 'user' })
            user.roles = userRole._id
        }

        // Encrypting a password 
        user.password = await User.encryptPassword(user.password)

        // Uploading new user to DB
        const savedUser = await user.save()

        // Return
        res.status(201).json(user)
    } catch (error) {
        console.error(error)
    }
}

// Read
ctrl.getUser = async(req, res) => {
    // Getting users from DB
    const users = await User.find()
        // Return Users to client
    res.status(200).json(users)
}

// Update
ctrl.updateUser = async(req, res) => {
    // Finding the user with id, and modify his user with the data that be in the request
    const user = await User.findByIdAndUpdate(req.params.userid, req.body, { new: true })

    // Handle the case that the id doesnt found a user 
    if (!user) res.status(404).json({ message: 'user not found' })

    // Return the status code 201, and the modify user
    return res.status(201).json(user)
}

// Delete
ctrl.deleteUser = async(req, res) => {
    // Finding user with id, and delete this user
    const user = await User.findOneAndDelete(req.params.userid)

    // Handle the case that the id doesnt found a user
    if (!user) res.status(400).json({ message: 'user not found' })

    // Return the code 204, indicating that this was created
    return res.status(204).json()
}

module.exports = ctrl
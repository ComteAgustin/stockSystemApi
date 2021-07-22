// Require
const Role = require('../models/roles')

// Create Roles
const createRoles = async () => {
    const count = await Role.estimatedDocumentCount()

    if(count > 0) return

    const values = await Promise.all([
        new Role({name: 'user'}).save(),
        new Role({name: 'admin'}).save()
    ])
}

// Export
module.exports = createRoles
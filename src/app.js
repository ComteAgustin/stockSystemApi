// Imports
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')

const createRoles = require('./lib/initialSetup')

// Import Routes
const user = require('./routes/user.routes')
const articles = require('./routes/articles.routes')
const providers = require('./routes/providers.routes')
const sales = require('./routes/sales.routes')
const purchases = require('./routes/purchases.routes')
const auth = require('./routes/auth.routes.js')

// Import Package.json
const pkg = require('../package.json')

// Initializations
const app = express()
createRoles()

// Settings
app.set('port', process.env.PORT || 3000)
app.set('pkg', pkg)


// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(morgan('dev'))
app.use(helmet())

// Routes
app.use(user)
app.use(articles)
app.use(providers)
app.use(sales)
app.use(purchases)
app.use(auth)

// '/' Route
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to my api",
        name: app.get('pkg').name,
        version: app.get('pkg').version,
        description: app.get('pkg').description,
        author: app.get('pkg').author
    })
})

// Export
module.exports = app
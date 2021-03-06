// Import app with server config
const app = require('./app')
// Import database
require('./database')

// Starting server
app.listen(app.get('port'), () => {
    console.log(`Server on port: ${app.get('port')}`)
})
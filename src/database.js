// Import moongose ORM and config
const mongoose = require ('mongoose')
const config = require ('./config')

// Mongoose connection
mongoose
    .connect(config.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })

// Show that the connection is ok
mongoose.connection.on('error', err => {
    console.error(`MongoDB connection error: ${err}`) 
})
mongoose.connection.on('open', () => console.log('DB is connected'))
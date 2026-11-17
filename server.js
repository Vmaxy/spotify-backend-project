require('dotenv').config()
const app =  require('./src/app')

const connectDB = require('./src/db/db')

connectDB()

app.listen(4000, () => {
    console.log('4000 server running .. ');
    
})
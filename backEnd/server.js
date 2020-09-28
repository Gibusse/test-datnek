const express = require('express')
const bodyParser = require('body-parser')


const app = express();

const PORT = 3000;
const api = require('./routes/api')

// Middleware
app.use(bodyParser.json({urlencoded: true}))
app.use('/api', api);


app.get('/', (req, res) => {
    res.send('Hello from server')
});

app.listen(PORT, () => {
    console.log('Server running on port ', PORT)
})

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mssql = require('mssql');
const db = require('./config/MSSQL');


const app = express();

const PORT = 3000;
const api = require('./routes/api')

// Middleware
app.use(cors());
app.use(bodyParser.json())
app.use('/api', api);



app.get('/', (req, res) => {
    res.send('Hello from server')
});

mssql.connect(db).then(pool => {
    if(pool.connecting){
        console.log("Connecting to the database...");
    }
    if(pool.connected){
        app.listen(PORT, () => {
            console.log('Server running on port ', PORT)
        })
    }
}).catch((err) => {
    console.log('failed to open connection to the database');
    console.log(err)
})



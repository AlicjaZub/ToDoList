const express = require('express')
// const exphbs = require('express-handlebars')
const router = require('./Config/routes')
const cors = require('cors')


const app = express()
const port = 3000

app.use(cors())
app.use(express.static('public'))
app.use(express.json())
// app.engine('handlebars', exphbs())
// app.set('view engine', 'handlebars')
app.options('*', cors())

// enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

// call all routes
router(app)


app.listen(port, () => console.log('Server running'))

const express = require('express')
const serverless = require('serverless-http')
const app = express()
const router = express.Router()

router.get('/', (req,res) => {
    res.json({message: "Example of Express Routing through Netlify"})
})
router.get('/test', (req,res) => {
    res.json({message: "This is a TEST"})
})

app.use(`/.netlify/functions/api`, router);
module.exports = app;
module.exports.handler = serverless(app)
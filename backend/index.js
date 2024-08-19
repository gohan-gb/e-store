const express = require('express')
const app = express();
const PORT = process.config.PORT || 8080

app.get("/", (req, res)=>{
    res.send('hello world')
})

app.listen( PORT, (req, res)=>{
    console.log(`server started on port ${PORT}`)
} )
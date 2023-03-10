const express = require('express')

const app = express()

const logger = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url , time)
    // res.send('Testing')
    next()
}
//middleware function
app.get('/' , logger ,  (req,res) => {
    
    res.send("Home")
})

app.get('/about' ,logger ,  (req,res) =>{
    res.send("About")
})
app.listen(5000 , ()=>{
    console.log('Server is listening on the port 5000 ....')
})
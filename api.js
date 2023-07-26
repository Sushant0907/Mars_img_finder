const express = require ("express")
const cors = require("cors")
require("dotenv").config()
const port = 8000


const app = express()

app.use(cors())


app.get('/', (req, res) => {
    
    res.json("hi")

})


app.get('/imgs', (req, res) => {

    const date = req.query.date
    console.log(date)

    const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key="+process.env.API_KEY+"&earth_date=" + date;
        
    fetch(url).then((value) => {
        return value.json()
    }).then((value2) => {

        res.json(value2)
    })


})


























app.listen(port, () =>{

    console.log("backend started on port " + port)

})


























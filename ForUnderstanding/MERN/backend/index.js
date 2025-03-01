import express from "express"

const app = express()

const PORT = process.env.PORT | 3000


app.listen(PORT, ()=>{
    console.log("App running on PORT", PORT)
})


app.get('/api/products', (req, res)=>{
    res.send("working")
})
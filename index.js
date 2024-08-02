const express=require('express')
const app=express()
const port=3000
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/k',(req, res)=>{
    res.send("yes BABy")
    })
    app.get('/baby',(req,res)=>{
        res.send("Howdy")
    })
app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })  


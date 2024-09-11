const express = require('express');
const app = express();
const path = require('path')
const ejsMate = require('ejs-mate')

app.engine('ejs',ejsMate)
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'))

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/item',(req,res) => {
    // const campgrounds = await Campground.find({})
    res.render('item')
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
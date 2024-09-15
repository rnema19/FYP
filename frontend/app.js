const express = require('express');
const app = express();
const path = require('path')
const ejsMate = require('ejs-mate')

app.engine('ejs',ejsMate)
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'))

app.get('/',(req,res) => {
    res.render('login')
})

app.get('/home', (req, res) => {
  const projects = [
    {
          id: 1,
          name: "PG Classroom Complex",
          supervisor: "Dr. Abhay Tawalare",
          company: "Mana Constructions",
          completion: 10,
        },
        {
          id: 2,
          name: "VNIT Swimming Pool",
          supervisor: "ABC",
          company: "Swimming Pools Ltd",
          completion: 100,
        },
        {
          id: 3,
          name: "Boys Hostel",
          supervisor: "ABC",
          company: "lorem",
          completion: 80,
        },
        {
          id: 4,
          name: "Girls Hostel",
          supervisor: "ABC",
          company: "ABC Builders",
          completion: 55,
        },
        {
          id: 5,
          name: "Boys Mess",
          supervisor: "XYZ",
          company: "VNIT Inc.",
          completion: 30,
        },
        {
          id: 6,
          name: "Civil Lab 1",
          supervisor: "PQRST",
          company: "PQR Inc.",
          completion: 70,
        }    
  ];

  res.render('home', { projects });
});

app.get('/comments',(req,res) => {
    res.render('comments')
})

app.get('/project-details',(req,res) => {
    res.render('project-details')
})

app.get('/login',(req,res) => {
    res.render('login')
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})
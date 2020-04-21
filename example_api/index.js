const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));

// primera ruta tipo get
app.get('/listuser',(req, res) =>{
  res.send('Hello World!');
});

app.post('/adduser',(req,res) =>{
    const {name, password} = req.body;
    res.json({
        name: name,
        password: password
    })
});
app.post('/deleteuser',(req,res) =>{
    const {name, password} = req.body;
    res.json({
        name: name,
        password: password
    })
});
app.post('/updateuser',(req,res) =>{
    const {name, password} = req.body;
    res.json({
        name: name,
        password: password
    })
});

//crea el servidor
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
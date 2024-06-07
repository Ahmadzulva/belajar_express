const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    res.send("Hello World!")
})
// Parameter    
// app.get('/profile/:nama',(req,res) => {
//     res.send(`Halo nama saya ${req.params.nama}`)
// })

// Query
// app.get('/profile',(req,res) => {
//     res.send(`Halo nama saya ${req.query.nama}`)
// })


// app.get('/profile',(req,res) => {
//     res.sendFile('./profile.html', {root: __dirname})
// })

// app.get('/about',(req,res) => {
//     res.sendFile('./about.html', {root: __dirname})
// })

app.get('/profile',(req,res) => {
    const nama = "Nabil";

    const siswa =[
        {
        nama: "Ahmad",
        kewarganegaraan: "Jerman",
        pendidikan: "S3"
        },
        {
        nama: "Angga",
        kewarganegaraan: "Jefun",
        pendidikan: "S7"
        },
        {
        nama: "Irsyad",
        kewarganegaraan: "Rusia",
        pendidikan: "S4"
        },
    ]

    res.render('profile',{
        nama: nama,
        alamat: "Eigenrieden",
        siswa
    });
})

app.get('/about',(req,res) => {
    res.render('about')
})


app.get('/contact',(req,res) => {
    res.send("Ini adalah function Contact")
})

app.get('/picture',(req,res) => {
    res.send("Ini adalah function picture")
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})
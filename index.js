const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.urlencoded())
const corsOptions ={
    origin:'*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'to_develop'
})
app.use(cors(corsOptions))

conn.connect(function(err){
    if(err)
        throw err
})
app.get('/', function(req,res){
    res.send(`
        <form method="post" action="/todo">
            <input name="nama" style="margin-right:10px"/>
            <input type="submit"/>
        </form>
    `)
})
app.post('/todo',function(req,res){
    const sql = `INSERT INTO data (nama) VALUES (\'${req.body.nama}\')`
    conn.query(sql,function(err){
        if(err) 
            throw err
        console.log('Data Added')
    })
    res.end()
})

app.get('/todo',function(req,res){
    const sql = 'SELECT * FROM data'
    conn.query(sql,function(err,result){
        if(err)
            throw err
        res.send(result)
        console.log(result)
    })
})

app.delete('/todo/:nama',function(req,res){
    const query = `DELETE FROM data where nama=\'${req.params.nama}\'`
    conn.query(query,function(err,result){
        if(err)
            throw err
        res.send("Deleted !")
    })
})

app.listen(3000, () => {
    console.log('Server sudah berjalan pada port 3000')
})
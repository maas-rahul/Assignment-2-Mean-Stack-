const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const mysql =require('mysql');

const { mongoose } = require('./db.js');

//const { mysql } = require('./db.js');

var reportdataController = require('./controllers/reportdataController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200'}));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/reportdatas', reportdataController);

//app.use(app.router);
//routes.initialize(app);

//connection for Mysql.. or mysql work start here....

var mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password :'',
    database : 'reports'
});

mysqlConnection.connect((err) =>{
    if(!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection Failed \n Error: ' + JSON.stringify(err, undefined, 2));
});

// get all the reports data..
app.get('/report', (req,res) => {
    mysqlConnection.query('SELECT * FROM reportdata', (err, rows, fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    });
});

//get an reports by id ..

app.get('/report/:id', (req,res) => {
    mysqlConnection.query('SELECT * FROM reportdata Where title= ?',[req.params.id], (err, rows, fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    });
});

//Delete an Reports ..

app.delete('/report/:id', (req,res) => {
    mysqlConnection.query('DELETE from reportdata Where id= ?',[req.params.id], (err, rows, fields)=>{
        if(!err)
            res.send('Deleted SuccessFully..!');
        else
            console.log(err);
    });
});
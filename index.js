if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
};

const express = require('express');
const cors = require('cors');
const Conn = require('./conn/conn');
const tasksRouter = require('./routes/tasks.routes');
const app = express();
const port = 3001;


app.use(express.json());
app.use(cors());
app.use('/tasks', tasksRouter);


const db_url= process.env.DB_URL;
const db_user= process.env.DB_USER;
const db_data= process.env.DB_DATA;
const db_pass= process.env.DB_PASS; 
console.log(db_url, db_pass, db_user, db_data )
Conn(db_url, db_user,db_pass, db_data );


app.listen(process.env.PORT || port, () => {
    console.log(`servidor rodando na porta ${port}`)
});




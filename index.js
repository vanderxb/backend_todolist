const express = require('express');
const cors = require('cors');
const Conn = require('./conn/conn');
const tasksRouter = require('./routes/tasks.routes');
const app = express();
const port = 3001;


app.use(express.json());
app.use(cors());
app.use('/tasks', tasksRouter);

Conn();


app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
});




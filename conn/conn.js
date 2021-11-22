const mongoose = require('mongoose');

const Conn = () => {
    mongoose.connect('mongodb://localhost:27017/tasks', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(()=>{
    console.log('conexão executada com sucesso');
}).catch(()=>{
    console.error(err);
})
}

module.exports = Conn;
const TasksService = require('../services/tasks.service')

const tasksService = new TasksService;

class TasksController{

getTasks = async (req, res) => {
    const tasks = await tasksService.findall();
    res.send(tasks);
}

getTaskById = async (req, res) => {  
    const task = await tasksService.findById(req.params.id);
    res.send(task);
  }

  
createTask = async (req, res) => {
    if(!req.body){
      return;
    }
    await tasksService.create(req.body)
    .then(() => {
      res.send({message: `Success`})
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({message: `Error`})
    })
  }

  
editTask = async (req, res) => {
    const idParam = req.params.id;
    const taskEdit = req.body;
    await tasksService.edit(idParam, taskEdit)
    .then(() => {
      res.send({message: 'Success'})
    })
    .catch( err => { 
      res.status(500).send({message: `Error: ${err}`})
    })
  }

  
deleteTask = async (req, res) => {
    const idParam = req.params.id;
    await tasksService.delete(idParam)
    .then(() => {
      res.send({message: 'Success'})
    })
    .catch(err => {
      res.status(500).send({message: `Error: ${err}`});
    })
  }

}

module.exports = TasksController;

const TasksModel = require('../models/task');

class tasksService {
    findall = async () => await TasksModel.find();

    findById = async (id) => {
        return await TasksModel.findById(id)
      };
    
      
    create = async (task) => {
        return await TasksModel.create(task)  
      };
    
      
    edit = async (id, task) => {
        return await TasksModel.updateOne({ _id: id}, task)
      };
    
      
    delete = async (id) => {
        return await TasksModel.deleteOne({ _id: id})
      };
}

module.exports = tasksService;
import express from 'express'
import { deleteTask, getAllTask, insertTask, updateTask} from '../model/task/TaskModel.js'
const router = express.Router()


//post 
 router.post('/',async(req,res)=>{
    try{
        const result = await insertTask(req.body)
        console.log(req.body)
        console.log(result)
        result?._id 
        ? res.json({
            message:"new task has been added"
        })
        :
        res.json({
            message:"failed to add new task",
            
            
        })

    }catch(error){

    }
    
    
 })

 //get
 router.get('/',async(req,res)=>{
    try{
        const tasks = await getAllTask()
        console.log(tasks)

        tasks.length > 0 
        ? res.json(tasks)
        :
        res.json({
            message:"no task found"
        })

    }catch(error){

    }
 })


 //delete
 router.delete('/',async(req,res)=>{
    try {
        const tasktodelete =await deleteTask(req.body)
        console.log(tasktodelete)
        res.json({
            message:"task deleted"
        })
    } catch (error) {
        
    }

 })

 //update
 router.patch('/', async(req,res)=>{
    const {id, type} = req.body
    console.log(id,type)
    try {
        const idToUpdate ={ _id: id }
        const updatedTask={
            $set:{
                type:type
            }
        }
        const taskToUpdate = await updateTask(idToUpdate,updatedTask)
        if (taskToUpdate.modifiedCount === 1) {
            return res.json({ message: 'Task updated successfully' });
        } else {
            return res.status(404).json({ message: 'Task not found or no changes were made' });
        }
    } catch (error) {
        console.log('error updating task')
        
    }
 })
export default router
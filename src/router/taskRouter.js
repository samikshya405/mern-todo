import express from "express";
import {
  deleteManyById,

  getAllTask,
  insertTask,
  updateTask,
} from "../model/task/TaskModel.js";
const router = express.Router();

//post
router.post("/", async (req, res) => {
  try {
    const result = await insertTask(req.body);
    console.log(req.body);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "new task has been added",
        })
      : res.json({
          status: "error",
          message: "failed to add new task",
        });
  } catch (error) {
    console.log(error)
    res.status(500).json({
        status: "error",
        message: "failed to add new task",
      });
  }

});

//get
router.get("/", async (req, res) => {
  try {
    const tasks = await getAllTask();
    console.log(tasks);

    tasks.length > 0
      ? res.json(tasks)
      : res.json({
          message: "no task found",
        });
  } catch (error) {}
});

//delete
router.delete("/", async (req, res) => {
  // const ids = req.body;
  try {
    const result = await deleteManyById(req.body);
    console.log(result);
    result?._id
      ? res.json({
          message: "task has been deleted",
        })
      : res.json({
          message: "unable to delete try again later",
        });
  } catch (error) {
    console.log(error);
  }
});

//update
router.patch("/", async (req, res) => {
  const { id, type } = req.body;
  console.log(id, type);
  try {
    // const idToUpdate ={ _id: id }
    // const updatedTask={
    //     $set:{
    //         type:type
    //     }
    // }
    // const taskToUpdate = await updateTask(idToUpdate,updatedTask)
    // if (taskToUpdate.modifiedCount === 1) {
    //     return res.json({ message: 'Task updated successfully' });
    // } else {
    //     return res.status(404).json({ message: 'Task not found or no changes were made' });
    // }
    const tasktoUpdate = await updateTask(req.body);
    tasktoUpdate?._id
      ? res.json({
          message: "task has been updated",
        })
      : res.json({
          message: "something went wrong",
        });
  } catch (error) {
    console.log("error updating task");
  }
});
export default router;

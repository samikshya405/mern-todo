import TaskSchema from "./TaskSchema.js"

//create
export const insertTask =(taskObj)=>{
    return TaskSchema(taskObj).save()
}

export const getAllTask =()=>{
    return TaskSchema.find()
}


export const deleteTask=(objtoDelete)=>{
    return TaskSchema.deleteOne(objtoDelete)

}

export const updateTask=(filter, update)=>{
    return TaskSchema.updateOne(filter, update)
}
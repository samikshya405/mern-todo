import TaskSchema from "./TaskSchema.js";

//create
export const insertTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};

export const getAllTask = () => {
  return TaskSchema.find();
};

// export const deleteTask = (id) => {
//   // return TaskSchema.deleteOne(idtoDelete)
//   return TaskSchema.findByIdAndDelete(id);
// };
export const deleteManyById = (selectedIds) => {
  
    // const idsToDelete = selectedIds.map((_id) => _id);
    return TaskSchema.deleteMany({ _id: { $in: selectedIds } });
  
};
export const updateTask = ({ id, type }) => {
  return TaskSchema.findByIdAndUpdate(id, { type }, { new: true });
};

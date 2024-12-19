import axiosAuthorized from "./config";

const getAllTask = async () => {
  try {
    const response = await axiosAuthorized.get("/allTask");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const addTask = async (task) => {
  try {
    const response = await axiosAuthorized.post("/addTask", task);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateTask = async (id, task) => {
  try {
    const response = await axiosAuthorized.put(`/editTask/${id}`, task);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteTask = async (id) => {
  try {
    const response = await axiosAuthorized.delete(`/deleteTask/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getAllTask,addTask,updateTask,deleteTask };

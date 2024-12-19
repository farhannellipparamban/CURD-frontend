import React, { useState, useEffect } from "react";
import { updateTask } from "../api/taskApi";

const EditTask = ({ showModal, setShowModal, Task, updateTaskList }) => {
  const [editTask, setEditTask] = useState(Task);

  useEffect(() => {
    setEditTask(Task);
  }, [Task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditTask({ ...editTask, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await updateTask(editTask._id, editTask);
      updateTaskList();
      toast.success(message);
      setShowModal(false);
    } catch (error) {
      console.error("Error updating Task:", error);
      toast.error("Failed to update Task. Please try again later.");
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start p-5">
                    <div className="-mt-3 text-center sm:text-left w-full">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900 mb-5"
                        id="modal-headline"
                      >
                        Edit Task
                      </h3>
                      <div className="mt-2">
                        <div className="mb-4">
                          <input
                            type="name"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={editTask.task || ""}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="description"
                            id="description"
                            name="description"
                            placeholder="description"
                            value={editTask.description || ""}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="status"
                            id="status"
                            name="status"
                            placeholder="status"
                            value={editTask.status || ""}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-24 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Update
                  </button>
                </div>
                <div className="flex justify-center mt-4 mb-12">
                  <button
                    type="button"
                    className="px-24 py-2 bg-orange-700 text-white rounded-md hover:bg-orange-800"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditTask;

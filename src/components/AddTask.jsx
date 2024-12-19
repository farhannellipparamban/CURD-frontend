import React, { useState } from "react";

const AddTask = ({
  showModal,
  setShowModal,
  newTask,
  setNewTask,
  addTask,
  updateTaskList,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message } = await addTask(newTask);
      setShowModal(false);
      setNewTask({
        task: "",
        description: "",
        status: "",
      });
      await updateTaskList();
      toast.success(message);
    } catch (error) {
      console.error("Error adding Task:", error);
      toast.error("Failed to add Task. Please try again later.");
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
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
                        Add New Task
                      </h3>
                      <div className="mt-2">
                        <div className="mb-4">
                          <input
                            type="task"
                            id="task"
                            name="task"
                            placeholder="task"
                            value={newTask.task}
                            onChange={handleInputChange}
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
                            value={newTask.description}
                            onChange={handleInputChange}
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
                            value={newTask.status}
                            onChange={handleInputChange}
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
                    Submit
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

export default AddTask;

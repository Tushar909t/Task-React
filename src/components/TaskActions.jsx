import React from "react";

const TaskActions = ({ AddOnTask, DeleteAll }) => {
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <button
          onClick={AddOnTask}
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold">
          Add Task
        </button>
        <button
          onClick={DeleteAll}
          className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">
          Delete All
        </button>
      </div>
    </div>
  );
};

export default TaskActions;

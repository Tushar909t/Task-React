import React, { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import TaskNotFound from "./TaskNotFound";
const TaskBoard = () => {
  const DefaultTask = {
    id: crypto.randomUUID(),
    title: "Integration API",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently ",
    tags: ["React", "Next"],
    priority: "High",
    isfavarite: false,
  };
  const [tasks, setTasks] = useState([DefaultTask]);
  const [isAddShowModalTask, setAddShowModalTask] = useState(false);
  const [isEditTask, setIsEditTask] = useState(null);

  function HandleAddtTask(NewTask, isEdit) {
    if (isEdit) {
      setTasks([...tasks, NewTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === NewTask.id) {
            return NewTask;
          }
          return task;
        })
      );
    }
    setAddShowModalTask(false);
  }
  function HandleSearch(searchTerm) {
    const filteredTasks = tasks.filter((task) => {
      return task.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setTasks([...filteredTasks]);
  }
  function HandileEditTask(task) {
    setIsEditTask(task);
    setAddShowModalTask(true);
  }

  function HandleCloseTask() {
    setAddShowModalTask(false);
    setIsEditTask(null);
  }
  function HandleDelete(isDelete) {
    const filteredTasks = tasks.filter((task) => {
      return task.id !== isDelete;
    });
    setTasks([...filteredTasks]);
  }
  function HandleDeleteAll() {
    setTasks([]);
  }
  function HandleFavarite(taskId) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTask = [...tasks];
    newTask[taskIndex].isfavarite = !newTask[taskIndex].isfavarite;
    setTasks(newTask);
  }
  return (
    <section className="mb-20" id="tasks">
      {isAddShowModalTask && (
        <AddTask
          onSave={HandleAddtTask}
          editTask={isEditTask}
          onClose={HandleCloseTask}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask onSearch={HandleSearch} />
        </div>
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            DeleteAll={HandleDeleteAll}
            AddOnTask={() => setAddShowModalTask(true)}
          />
          {tasks.length > 0 ? (
            <TaskList
              onFav={HandleFavarite}
              tasks={tasks}
              onDelete={HandleDelete}
              onEdit={HandileEditTask}
            />
          ) : (
            <TaskNotFound />
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;

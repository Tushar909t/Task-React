import { useState } from "react";

const AddTask = ({ onSave, editTask, onClose }) => {
  const [task, setTask] = useState(
    editTask || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isfavarite: false,
    }
  );
  const [isEdit, setIsEdit] = useState(Object.is(editTask, null));
  const HandleChange = (evn) => {
    const name = evn.target.name;
    let value = evn.target.value;
    if (evn.target.name === "tags") {
      value = evn.target.value.split(",");
    }
    setTask({ ...task, [name]: value });
  };
  return (
    <>
      <div className=" absolute bg-black opacity-70 w-full h-full top-0 left-0 z-0 "></div>
      <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 absolute z-10 top-1/4 left-1/3">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isEdit ? "Add New Task" : "Edit Add New Task"}
        </h2>
        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              value={task.title}
              onChange={HandleChange}
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              required
            />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              value={task.description}
              onChange={HandleChange}
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              required></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                value={task.tags}
                onChange={HandleChange}
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                required
              />
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                value={task.priority}
                onChange={HandleChange}
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                required>
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-between lg:mt-20">
          <button
            onClick={() => onSave(task, isEdit)}
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80">
            Create new Task
          </button>
          <button
            onClick={() => onSave(onClose)}
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80">
            Close
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTask;

import React from "react";
import { FaStar } from "react-icons/fa";
const TaskList = ({ tasks, onEdit, onDelete, onFav }) => {
  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto text-left xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
              Title
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
              Description
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
              Tags
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Priority
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, id) => {
            return (
              <tr
                key={id}
                className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                <td>
                  <button onClick={() => onFav(task.id)}>
                    {task.isfavarite ? (
                      <FaStar className="text-yellow-500" />
                    ) : (
                      <FaStar className="text-gray-500" />
                    )}
                  </button>
                </td>
                <td>{task.title}</td>
                <td>
                  <div>{task.description}</div>
                </td>
                <td>
                  {task.tags.map((tag) => {
                    return (
                      <span
                        key={tag}
                        className="bg-[#00D991A1] inline-block h-5 whitespace-nowrap text-white rounded-[45px] capitalize  mx-1 px-2.5 text-sm">
                        {tag}
                      </span>
                    );
                  })}
                </td>
                <td className="text-left">{task.priority}</td>
                <td>
                  <div className="flex items-center justify-center space-x-3">
                    <button
                      onClick={() => onDelete(task.id)}
                      className="text-red-500">
                      Delete
                    </button>
                    <button
                      onClick={() => onEdit(task)}
                      className="text-blue-500">
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TaskList;

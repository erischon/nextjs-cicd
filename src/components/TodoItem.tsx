"use client";

import { BiEdit, BiTrash } from "react-icons/bi";

type TodoItemProps = {
  id: string;
  title: string;
  isDone: boolean;
  toggleTask: (id: string, complete: boolean) => void;
  editTask: (id: string, title: string) => void;
  deleteTask: (id: string) => void;
};

/**
 * @description TodoItem component
 * @version 1.0.0
 */
export function TodoItem({
  id,
  title,
  isDone,
  toggleTask,
  editTask,
  deleteTask,
}: TodoItemProps) {
  return (
    <div className="grid grid-cols-12 px-5 py-1">
      <div className="col-span-10 flex gap-2 items-center">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={isDone}
          onChange={(e) => toggleTask(id, e.target.checked)}
        />

        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
        >
          {title}
        </label>
      </div>

      <div className="col-span-2 flex gap-3 items-center justify-center">
        <BiEdit
          className="cursor-pointer text-slate-300 text-lg hover:text-slate-400"
          onClick={() => editTask(id, title)}
        />
        <BiTrash
          className="cursor-pointer text-slate-300 text-lg hover:text-slate-400"
          onClick={() => deleteTask(id)}
        />
      </div>
    </div>
  );
}

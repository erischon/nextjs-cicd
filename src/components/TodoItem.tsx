"use client";

type TodoItemProps = {
  id: string;
  title: string;
  isDone: boolean;
};

/**
 * @description TodoItem component
 * @version 1.0.0
 */
export function TodoItem({ id, title, isDone }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={isDone}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}

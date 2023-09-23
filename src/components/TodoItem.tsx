"use client";

type TodoItemProps = {
  id: string;
  title: string;
  isDone: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

/**
 * @description TodoItem component
 * @version 1.0.0
 */
export function TodoItem({ id, title, isDone, toggleTodo }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={isDone}
        onChange={(e) => toggleTodo(id, e.target.checked)}
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

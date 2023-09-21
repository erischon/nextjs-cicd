import { TodoItem } from "@/components/TodoItem";

/**
 * @description TodoItem component
 * @version 1.0.0
 */
export default function Home() {
  const todos = [
    { id: "1", title: "Learn Next.js", isDone: true },
    { id: "2", title: "Build an App", isDone: false },
  ];

  return (
    <main className="">
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </main>
  );
}

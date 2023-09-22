import prisma from "@/lib/prismadb";

import { TodoItem } from "@/components/TodoItem";

/**
 * @description Get all todos from database
 * @version 1.0.0
 * @returns {Promise<Todo[]>}
 */
function getTodos() {
  return prisma.todo.findMany();
}

/**
 * @description TodoItem component
 * @version 1.0.0
 */
export default async function Home() {
  const todos = await getTodos();

  // const todos = [
  //   { id: "1", title: "Learn Next.js", isDone: true },
  //   { id: "2", title: "Build an App", isDone: false },
  // ];

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

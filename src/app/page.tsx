import FormAddTodo from "@/components/FormAddTodo";
import { TodoItem } from "@/components/TodoItem";

import { getTodos } from "@/libs/getTodos";
import prisma from "@/libs/prismadb";

async function toggleTodo(id: string, isDone: boolean) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { isDone } });
}

/**
 * @description TodoItem component
 * @version 1.0.0
 */
export default async function Home() {
  const todos = await getTodos();

  const todosNotDone = todos.filter((todo) => !todo.isDone);

  return (
    <main className="my-10">
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </main>
  );
}

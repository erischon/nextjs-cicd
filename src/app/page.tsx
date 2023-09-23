import FormAddTodo from "@/components/FormAddTodo";
import { TodoItem } from "@/components/TodoItem";
import { getTodos } from "@/libs/getTodos";

/**
 * @description TodoItem component
 * @version 1.0.0
 */
export default async function Home() {
  const todos = await getTodos();

  return (
    <main className="">
      <FormAddTodo />

      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </main>
  );
}

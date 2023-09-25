import { TodoItem } from "@/components/TodoItem";

import { getTodos } from "@/libs/getTodos";
import prisma from "@/libs/prismadb";
import Modal from "@/components/Modal";
import { redirect } from "next/navigation";
import FormAddTodo from "@/components/FormAddTodo";

/**
 * @description Toggle task, set isDone to true or false
 * @version 1.0.0
 * @param id  The id of the task
 * @param isDone  The status of the task
 */
async function toggleTask(id: string, isDone: boolean) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { isDone } });
}

/**
 * @description Edit task title
 * @version 1.0.0
 * @param id  The id of the task
 * @param title  The new title of the task
 */
async function editTask(id: string, title: string) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { title } });
}

/**
 * @description Delete task
 * @version 1.0.0
 * @param id  The id of the task
 */
async function deleteTask(id: string) {
  "use server";

  await prisma.todo.delete({ where: { id } });

  redirect("/");
}

/**
 * @description Close modal
 * @version 1.0.0
 */
async function onClose() {
  "use server";

  redirect("/");
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
      <div className="w-full">
        <div className="grid grid-cols-12 px-5 py-2 mb-4 bg-slate-700 rounded-sm">
          <div className="col-span-10 font-semibold">Tasks</div>
          <div className="col-span-2 text-center font-semibold">Actions</div>
        </div>

        <Modal title="Add Task" onClose={onClose}>
          <FormAddTodo />
        </Modal>

        <div className="">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTask={toggleTask}
              editTask={editTask}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

import { redirect } from "next/navigation";

import prisma from "@/libs/prismadb";

import Button from "./Button";

/**
 * @description Create a new todo
 * @version 1.0.0
 */
async function addTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();

  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }

  await prisma.todo.create({ data: { title, isDone: false } });

  redirect("/");
}

/**
 * @description Form component, used to add new todo
 * @version 1.0.0
 */
export default function FormAddTodo() {
  return (
    <>
      <form action={addTodo} className="flex gap-2 w-full">
        <input
          type="text"
          name="title"
          className="border-2 bg-slate-100 rounded-sm px-2 py-1 outline-none focus-within:border-slate-100"
        />

        <div className="flex gap-1 justify-end">
          <Button type="submit">Add</Button>
        </div>
      </form>
    </>
  );
}

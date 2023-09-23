import prisma from "@/libs/prismadb";
import { redirect } from "next/navigation";
import Link from "next/link";
import Button from "./Button";

async function createTodo(data: FormData) {
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
      <form action={createTodo} className="flex gap-2 w-full">
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />

        <div className="flex gap-1 justify-end">
          <Button type="submit">Create</Button>
        </div>
      </form>
    </>
  );
}

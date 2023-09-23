import prisma from "@/libs/prismadb";
import { redirect } from "next/navigation";
import Link from "next/link";
import FormAddTodo from "@/components/FormAddTodo";

async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }

  await prisma.todo.create({ data: { title, isDone: false } });
  redirect("/");
}

export default function Page() {
  return (
    <>
      <FormAddTodo />
    </>
  );
}

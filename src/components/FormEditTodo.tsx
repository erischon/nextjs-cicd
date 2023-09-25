import { redirect } from "next/navigation";

import prisma from "@/libs/prismadb";

import Button from "./Button";

/**
 * @description Form component, used to add new todo
 * @version 1.0.0
 */
export default function FormEditTodo() {
  return (
    <>
      <form action={""} className="flex flex-col md:flex-row gap-4 w-full">
        <input
          type="text"
          name="title"
          className="border-2 bg-slate-100 rounded-lg px-2 py-1 outline-none focus-within:border-slate-400"
        />

        <div className="">
          <Button type="submit">Edit</Button>
        </div>
      </form>
    </>
  );
}

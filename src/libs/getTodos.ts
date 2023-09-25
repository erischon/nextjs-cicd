import prisma from "@/libs/prismadb";

/**
 * @description Get all todos from database
 * @version 1.0.0
 * @returns {Promise<Todo[]>}
 */
export function getTodos() {
  // const todos = [
  //   {
  //     id: "1",
  //     title: "Learn Next.js",
  //     isDone: true,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  //   {
  //     id: "2",
  //     title: "Build an app",
  //     isDone: false,
  //     createdAt: new Date(),
  //     updatedAt: new Date(),
  //   },
  // ];

  // return todos;
  return prisma.todo.findMany();
}

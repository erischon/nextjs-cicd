import prisma from "@/libs/prismadb";

/**
 * @description Get all todos from database
 * @version 1.0.0
 * @returns {Promise<Todo[]>}
 */
export function getTodos() {
  return prisma.todo.findMany();
}

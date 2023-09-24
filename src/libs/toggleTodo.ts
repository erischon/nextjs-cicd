import prisma from "@/libs/prismadb";

/**
 * @description Toggle a todo's isDone status
 * @version 1.0.0
 */
export default async function toggleTodo(id: string, isDone: boolean) {
  await prisma.todo.update({ where: { id }, data: { isDone } });
}

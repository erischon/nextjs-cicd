import prisma from "@/libs/prismadb";

export default async function toggleTodo(id: string, isDone: boolean) {
  await prisma.todo.update({ where: { id }, data: { isDone } });
}

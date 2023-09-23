import { describe, beforeEach, expect, it, vi } from "vitest";

import { getTodos } from "../libs/getTodos";

import prismaMock from "../libs/__mocks__/prismadb"; // 👈🏻 import the mocked `prisma`

vi.mock("../libs/prismadb"); // 👈🏻 Mocked the `prisma` import

describe("todo", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("return an array of todos.", async () => {
    // Arrange
    const mockTodos = [
      {
        id: "1",
        title: "Learn Next.js",
        isDone: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        title: "Build an app",
        isDone: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    prismaMock.todo.findMany.mockResolvedValue(mockTodos); // 👈🏻 Mocked the `prisma.todo.findMany` method

    // Act
    const todos = await getTodos();

    // Assert
    expect(todos).toStrictEqual(mockTodos);
  });
});

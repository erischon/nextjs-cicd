import { describe, beforeEach, expect, it, vi } from "vitest";

import { getTodos } from "../libs/getTodos";

import prismaMock from "../libs/__mocks__/prismadb";

vi.mock("../libs/prismadb");

describe("todo", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("return an array of todos.", async () => {
    // Arrange
    const mockTodo = {
      id: "1",
      title: "Learn Next.js",
      isDone: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    prismaMock.todo.findMany.mockResolvedValue([mockTodo]);

    // Act
    const todos = await getTodos();

    // Assert
    expect(todos).toStrictEqual([mockTodo]);
  });
});

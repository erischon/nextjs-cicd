import { describe, beforeEach, expect, it, vi } from "vitest";
import prisma from "./prismadb";

import { getTodos } from "./getTodos";

import prismaMock from "./__mocks__/prisma";

vi.mock("./prismadb.ts", () => {
  return {
    id: "1",
    title: "Learn Next.js",
    isDone: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
});

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
    console.log("======todos", todos);

    // Assert
    expect(todos).toStrictEqual([mockTodo]);
  });
});

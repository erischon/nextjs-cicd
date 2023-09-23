import Link from "next/link";

/**
 * @description Header component
 * @version 1.0.0
 */
export function Header() {
  return (
    <header className="flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl font-bold">A Basic Todo App</h1>
      </Link>
    </header>
  );
}

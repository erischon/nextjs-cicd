import Link from "next/link";

import { MdAddCircleOutline } from "react-icons/md";

import Button from "../Button";

/**
 * @description Header component
 * @version 1.0.0
 */
export function Header() {
  return (
    <header className="flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl font-bold">A Simple Todo App</h1>
      </Link>

      <Button>
        <Link
          href="/?showModal=y&modalType=add"
          className="flex items-center gap-2"
        >
          <MdAddCircleOutline className="text-xl text-slate-200" />
          New task
        </Link>
      </Button>
    </header>
  );
}

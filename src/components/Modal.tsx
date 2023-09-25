"use client";

import { useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { AiOutlineClose } from "react-icons/ai";

type Props = {
  title: string;
  onClose: () => void;
  onSubmit: () => void;
  children: React.ReactNode;
};

export default function Modal({ title, onClose, onSubmit, children }: Props) {
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const showModal = searchParams.get("showModal");

  useEffect(() => {
    if (showModal === "y") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showModal]);

  const closeDialog = () => {
    dialogRef.current?.close();
    onClose();
  };

  const submit = () => {
    onSubmit();
    closeDialog();
  };

  const dialog: JSX.Element | null =
    showModal === "y" ? (
      <dialog
        ref={dialogRef}
        className="fixed rounded-md backdrop:bg-slate-800/90"
      >
        <div className="w-full max-w-full bg-slate-300 flex flex-col">
          <div className="flex flex-row justify-between pt-2 px-5 bg-slate-400">
            <h1 className="text-2xl">{title}</h1>

            <button
              onClick={closeDialog}
              className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
            >
              <AiOutlineClose />
            </button>
          </div>

          <div className="px-5 py-5">{children}</div>
        </div>
      </dialog>
    ) : null;

  return dialog;
}

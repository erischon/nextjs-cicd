import Modal from "@/components/Modal";
import { redirect } from "next/navigation";
import FormAddTodo from "@/components/FormAddTodo";

import { AiOutlineClose } from "react-icons/ai";

import FormEditTodo from "@/components/FormEditTodo";

/**
 * @description Close modal
 * @version 1.0.0
 */
async function onClose() {
  "use server";

  redirect("/");
}

export default function ModalFactory() {
  return (
    <>
      <Modal
        title="Add Task"
        onClose={onClose}
        modalContent={<FormAddTodo />}
      />
    </>
  );
}

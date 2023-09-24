"use client";

import { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

/**
 * @description Modal component
 * @version 1.0.0
 */
export default function Modal() {
  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <div
          className={`fixed bg-slate-800 w-full h-full top-0 left-0 z-50 transition duration-300 opacity-90 flex justify-center items-center overflow-x-hidden overflow-y-auto`}
        >
          <div
            className={`bg-slate-300 text-slate-800 w-11/12 md:max-w-md mx-auto rounded-md shadow-lg z-50 overflow-y-auto`}
          >
            <div className="flex justify-between items-start p-4 gap-4">
              <h2 className="text-xl font-bold">title</h2>

              <div className="flex justify-center items-center cursor-pointer">
                <AiOutlineClose
                  className="text-xl font-bold"
                  onClick={toggleModal}
                />
              </div>
            </div>

            <div className="py-4 text-left px-4">message</div>

            <div className="flex gap-2 items-center w-100 p-4">
              <button
                className={`border-2 border-slate-700 rounded-sm px-3 py-1 font-semibold`}
              >
                actionA?.title
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

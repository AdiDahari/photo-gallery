import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Dialog, Transition } from "@headlessui/react";
import { closeModal } from "../../features/modal/modalSlice";
import Search from "../Search";

const Modal = () => {
  const { isOpen, content } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {}, [isOpen]);

  const cancelBtnRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelBtnRef}
        onClose={() => dispatch(closeModal())}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-center font-semibold leading-6 text-gray-900"
                      >
                        {!content ? (
                          <Search />
                        ) : (
                          <ul>
                            {Object.keys(content).map((prop) => (
                              <li key={prop}>{content[prop]}</li>
                            ))}
                          </ul>
                        )}
                      </Dialog.Title>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;

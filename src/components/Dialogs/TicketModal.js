import { useRecoilState } from "recoil";
import { openTicket } from "../../atoms/modalAtom";
import { Dialog, Transition } from "@headlessui/react";

function TicketModal() {
  let [isOpen, setIsOpen] = useRecoilState(openTicket);

  return (
    <Transition as={Dialog} show={isOpen} onClose={() => setIsOpen(false)}>
      <Transition.Child
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="relative z-50"
      >
        <div
          className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/30"
          aria-hidden="true"
        >
          <Dialog.Panel className="w-full max-w-sm card bg-base-100 shadow-xl border-2 border-base-200">
            <div className="card-body">
              <Dialog.Title className="card-title">Ticket</Dialog.Title>
              <Dialog.Description className="font-light">
                Update your ticket information below:
              </Dialog.Description>

              <div className="card-actions justify-end mt-4">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Save
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Transition.Child>
    </Transition>
  );
}

export default TicketModal;

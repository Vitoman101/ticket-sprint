import { useRecoilState } from "recoil";
import { openProfile } from "../../atoms/modalAtom";
import { Dialog, Transition } from "@headlessui/react";

function ProfileModal() {
  let [isOpen, setIsOpen] = useRecoilState(openProfile);

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
              <Dialog.Title className="card-title">Profile</Dialog.Title>
              <Dialog.Description className="font-light">
                Update your profile information below:
              </Dialog.Description>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Full name:</span>
                </div>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Email:</span>
                </div>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Password:</span>
                </div>
                <input
                  type="password"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Confirm Password:</span>
                </div>
                <input
                  type="password"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <div className="card-actions justify-end mt-4">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Save
                </button>
                <button
                  className="btn btn-warning btn-sm"
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

export default ProfileModal;

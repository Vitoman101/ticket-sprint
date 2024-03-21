import { TicketIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { activeTickets, openProfile } from "../../atoms/modalAtom.js";
import { useRecoilState, useRecoilValue } from "recoil";

const Navbar = () => {
  let [isOpen, setIsOpen] = useRecoilState(openProfile);
  const tickets = useRecoilValue(activeTickets);

  return (
    <div className="navbar bg-neutral">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">
          Ticket Sprint
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <TicketIcon className="h-5 w-5" />
              <span className="badge badge-sm indicator-item">{tickets}</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow border-2 border-base-200"
          >
            <div className="card-body">
              <span className="font-bold text-lg">
                {tickets} Active tickets
              </span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <UserCircleIcon className="h-10 w-10"></UserCircleIcon>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border-2 border-base-200"
          >
            <li>
              <Link onClick={() => setIsOpen(true)}>Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

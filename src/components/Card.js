import { useRecoilState } from "recoil";
import { openTicket } from "../atoms/modalAtom";

const Card = ({ title, description, due, id, column }) => {
  let [isOpen, setIsOpen] = useRecoilState(openTicket);

  return (
    <div
      onClick={() => setIsOpen(true)}
      draggable="true"
      className="card w-auto bg-base-100 shadow-xl cursor-grab active:cursor-grabbing p-2 hover:transition-transform hover:scale-105 active:scale-95"
    >
      <div className="">
        <p className="font-bold">{title}</p>
        <p className="truncate">{description}</p>
        <div className="card-actions justify-end text-right items-center">
          <p className="font-thin text-xs">Due date: {due}</p>
          <div className="badge badge-warning badge-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;

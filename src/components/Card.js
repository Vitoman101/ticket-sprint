import { useRecoilState } from "recoil";
import { openTicket } from "../atoms/modalAtom";
import { Draggable } from "react-beautiful-dnd";

const Card = ({ title, description, due, id, column, index }) => {
  let [isOpen, setIsOpen] = useRecoilState(openTicket);

  return (
    <Draggable draggableId={id} key={id} index={index}>
      {(provided) => (
        <div
          onClick={() => setIsOpen(true)}
          className="card w-auto bg-base-100 shadow-xl cursor-grab active:cursor-grabbing p-2 hover:transition-transform hover:scale-105 active:scale-95"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
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
      )}
    </Draggable>
  );
};

function removecard() {
  state;
}

export default Card;

import { useRecoilState } from "recoil";
import { openTicket } from "../atoms/modalAtom";
import { Draggable } from "react-beautiful-dnd";
import { isPast } from "date-fns";

const Card = ({ title, description, due, id, column, index }) => {
  let [isOpen, setIsOpen] = useRecoilState(openTicket);

  const badgeStatusIsTaskLate = isPast(new Date(due));

  return (
    <Draggable draggableId={id} key={id} index={index}>
      {(provided) => (
        <div
          onClick={() => setIsOpen(true)}
          className="card w-auto bg-base-100 shadow-xl cursor-grab active:cursor-grabbing p-2"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="">
            <p className="font-bold">{title}</p>
            <p className="truncate">{description}</p>
            <div className="card-actions justify-end text-right items-center">
              <p className="font-thin text-xs">Due date: {due}</p>
              <div
                className={
                  "badge badge-sm " +
                  (badgeStatusIsTaskLate ? "badge-error" : "badge-secondary")
                }
              ></div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;

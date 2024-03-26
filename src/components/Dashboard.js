import ProfileModal from "./Dialogs/ProfileModal.js";
import TicketModal from "./Dialogs/TicketModal.js";
import NEW_TESTING_DATA from "./default-data.js";
import Column from "./Column.js";
import { useRecoilState } from "recoil";
import { activeTickets } from "../atoms/modalAtom.js";
import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

const Dashboard = () => {
  const [state, setState] = useState(NEW_TESTING_DATA);
  const [tickets, setTickets] = useRecoilState(activeTickets);

  useEffect(() => {
    setTickets(Object.keys(NEW_TESTING_DATA.tasks).length);
  }, [state]);

  return (
    <DragDropContext>
      <div className="flex w-full bg-base-100">
        <div className="flex-grow mx-auto px-4 py-8">
          <div className="flex flex-wrap md:flex-nowrap md:flex-row gap-2 h-full">
            {state.columnOrder.map((columnId, index) => {
              const column = state.columns[columnId];
              const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
              return (
                <Column
                  key={column.id}
                  id={column.id}
                  index={index}
                  title={column.title}
                  cards={tasks}
                />
              );
            })}
          </div>
        </div>
        <ProfileModal />
        <TicketModal />
      </div>
    </DragDropContext>
  );
};

export default Dashboard;

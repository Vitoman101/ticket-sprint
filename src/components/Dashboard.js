import { useState } from "react";
import ProfileModal from "./Dialogs/ProfileModal.js";
import TicketModal from "./Dialogs/TicketModal.js";
import NEW_TESTING_DATA from "./default-data.js";
import Column from "./Column.js";

const Dashboard = () => {
  const state = NEW_TESTING_DATA;

  return (
    <div className="flex w-full bg-base-100">
      <div className="flex-grow mx-auto px-4 py-8">
        <div className="flex gap-2 h-full">
          {state.columnOrder.map((columnId, index) => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
            return <Column key={index} title={column.title} cards={tasks} />;
          })}
        </div>
      </div>
      <ProfileModal />
      <TicketModal />
    </div>
  );
};

export default Dashboard;

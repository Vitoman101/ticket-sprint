import { useState } from "react";
import AddCard from "./AddCard.js";
import Card from "./Card.js";

const Column = ({ title, column, cards, setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragOver = () => {
    setActive(true);
  };

  const handleDragEnd = () => {
    setActive(false);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragEnd}
      onDrop={() => setActive(false)}
      className={`rounded-lg w-full p-4 h-full ${
        active ? "bg-base-300" : "bg-base-200"
      }`}
    >
      <div className="border-solid border-b-2 border-zinc-400 pb-2 mb-2">
        <div className="mx-4 justify-between flex">
          <p className="font-bold =">{title}:</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {cards.map((task, index) => {
          return <Card key={index} id={task.id} {...task} />;
        })}
        <AddCard />
      </div>
    </div>
  );
};

export default Column;

import { PlusCircleIcon } from "@heroicons/react/24/outline";

const AddCard = () => {
  return (
    <div>
      <button className="flex items-center justify-center w-full gap-1.5 px-3 py-1.5 text-xs btn btn-ghost btn-circle">
        <span>
          <PlusCircleIcon className="w-6 h-6" />
        </span>
      </button>
    </div>
  );
};

export default AddCard;

import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const deadlineDate = new Date(taskObj.deadline);
  const daysLeft = differenceInDays(deadlineDate, new Date());
  const toNow = formatDistanceToNow(deadlineDate, {
    addSuffix: true,
    locale: tr,
  });
  return (
    <div className="p-6 bg-white rounded leading-6 mt-4 drop-shadow-md">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="text-xs pt-1">
        son teslim:{" "}
        <span
          className={`${
            daysLeft <= 3 ? "bg-[#ffd9d4] p-1" : "bg-[#d4d7ff] p-1"
          }`}
        >
          {toNow}
        </span>
      </div>
      <p className="pt-2 px-0 pb-3 text-sm text-[#444]">
        {taskObj.description}
      </p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block py-1 px-3 text-sm mr-1 mb-1.5 border border-solid border-gray-200 rounded-full"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block px-3 py-2 ml-auto bg-[#fecc91] shadow-sm rounded border-none cursor-pointer"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;

import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

const GoalList = () => {
  return (
    <>
      <div className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="flex justify-between items-center">
          <h5 class="mb-4 lg:mb-2 text-xl font-bold tracking-tight text-gray-900 ">
            Noteworthy technology acquisitions 2021
          </h5>
          <div className="flex gap-4">
            <FiEdit2 size={16} className="cursor-pointer " />
            <AiOutlineClose size={20} className="cursor-pointer" />
          </div>
        </div>

        <p class="font-normal text-gray-700 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </>
  );
};

export default GoalList;

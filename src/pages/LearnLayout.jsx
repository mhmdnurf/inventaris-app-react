import React from "react";

const LearnLayout = () => {
  return (
    <>
      <div className="flex flex-wrap mt-20 mx-4">
        <div className="px-10 py-2 bg-indigo-300 rounded-md sm:basis-1/2 flex-grow mr-2 mt-6">
          1
        </div>
        <div className="px-10 py-2 bg-indigo-300 rounded-md flex-grow sm:basis-1/4 mr-2 mt-6">
          2
        </div>
        <div className="px-10 py-2 bg-indigo-300 rounded-md flex-grow sm:basis-1/3  mr-2 mt-6">
          3
        </div>
      </div>
    </>
  );
};

export default LearnLayout;

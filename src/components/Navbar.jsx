import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-400 border-b border-gray-200 w-full pb-5">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <span className="self-center whitespace-nowrap text-white font-bold font-sans text-center align-middle justify-center mx-3 mt-3">
              Task
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

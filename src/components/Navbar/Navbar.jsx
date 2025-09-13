import React from "react";
import Button from "../ui/Button";

function Navbar() {
  return (
    <nav className="max-w-[750px] w-full mx-auto p-1.5 pl-4 border border-gray-200 bg-white/70 rounded-lg flex justify-between items-center">
      <div className="h-3.5 flex-1">
        <img
          src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67ea1567f801b7bf3d63fad7_zuno-logo-b.svg"
          alt=""
          className="h-full"
        />
      </div>
      <div className="flex-1">
        <ul className="flex gap-4 font-mono text-gray-800">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex-1 flex justify-end items-center">
        <Button className="font-medium px-4 text-gray-800">Request demo</Button>
      </div>
    </nav>
  );
}

export default Navbar;

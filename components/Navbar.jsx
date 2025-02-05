import { Bell, Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="bg-accent py-5 px-10">
      <div className="flex justify-end items-center ">
        <div className="flex space-x-9">
          <div className="flex items-center space-x-9 text-white">
            <Mail />

            <Bell />
          </div>

          <div className="w-10 h-10 rounded-full  overflow-hidden">
            <Image
              src="/img/profile.jpg"
              alt="User Avatar"
              width={50}
              height={50}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

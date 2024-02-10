import React, { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { IoIosContacts } from "react-icons/io";
const BottomNavigation = () => {
  const [active, setActive] = useState("");

  const handleActive = (link) => {
    console.log("clicked");
    setActive(link);
  };
  console.log(active);
  return (
    <>
      <main className="mt-24">
        <section
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 40,
            // width:"80%"
          }}
          className="flex bg-purple-500 items-center justify-center  p-2 lg:hidden space-x-5"
        >
          <div
            onClick={() => handleActive("Contacts")}
            className={` flex items-center flex-col`}
          >
            <IoIosContacts className="text-sm sm:text-xl  text-white" />
            <span className="text-sm  sm:text-lg text-white">Contacts</span>
          </div>
          <div
            onClick={() => handleActive("Chats")}
            className="flex flex-col items-center"
          >
            <BsChatSquareDotsFill className="text-sm sm:text-xl text-white" />
            <span className="text-sm sm:text-lg text-white">Chats</span>
          </div>
          <div
            onClick={() => handleActive("Home")}
            className={`  flex flex-col items-center`}
          >
            <IoMdHome
              className={`${
                active === "Home" ? "text-blue-400 scale-y-150 font-bold"
              :"text-white"} text-sm sm:text-xl `}
            />
            <span
              className={` ${
                active === "Home" && "font-semibold text-blue-400"
              } text-sm sm:text-lg  text-white`}
            >
              Home
            </span>
          </div>
          <div
            onClick={() => handleActive("Settings")}
            className="flex flex-col items-center"
          >
            <IoSettingsSharp
              className={`${
                active === "Settings" && "text-blue-400 scale-y-150 font-bold"
              } text-sm sm:text-xl text-white`}
            />
            <span
              className={` ${
                active === "Settings" && "font-semibold text-blue-400"
              } text-sm  sm:text-lg  text-white`}
            >
              Settings
            </span>
          </div>
          <div
            onClick={() => handleActive("Noti")}
            className="flex flex-col items-center"
          >
            <IoMdNotifications className="text-sm sm:text-xl  text-white" />
            <span className="text-sm sm:text-lg  text-white">Notifications</span>
          </div>
        </section>
      </main>
    </>
  );
};

export default BottomNavigation;

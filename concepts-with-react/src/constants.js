import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
export const routes = [
  {
    path: "/",
    label: "Dashboard",
    icon: MdDashboard,
  },
  {
    path: "/profile",
    label: "Profile",
    icon: CgProfile,
  },
  {
    path: "/settings",
    label: "Settings",
    icon: IoIosSettings ,
  },
];

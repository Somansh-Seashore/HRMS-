import {
  Home,
  Users,
  Clock,
  Calendar,
  CheckSquare,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: Home, path: "/" },
    { name: "Employee Directory", icon: Users, path: "/employees" },
    { name: "Attendance", icon: Clock, path: "/attendance" },
    { name: "Leave Management", icon: Calendar, path: "/leave" },
    { name: "Onboarding", icon: CheckSquare, path: "/onboarding" },
    { name: "Performance", icon: TrendingUp, path: "/performance" },
  ];

  return (
    <div className="bg-gray-200 text-black w-64 min-h-screen p-4 flex flex-col">
      <ul className="flex-1 flex flex-col text-center  ">
        {menuItems.map((item) => (
          <li className="" key={item.name}>
            <Link
              to={item.path}
              className="flex m-2 p-3  rounded-lg  hover:bg-blue-400 transition-colors duration-200"
            >
              <item.icon size={20} className="mr-3" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

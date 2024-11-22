import { RiPagesLine } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className="w-64 bg-[#004D6E] text-white h-screen flex flex-col">
            <div className="p-6 text-2xl font-bold">OPX</div>
            <nav className="flex-1">
                <ul>
                    <li className="p-4 hover:bg-white hover:text-[#004D6E] flex items-center"><MdDashboard className="mr-2" /> <span>Dashboard</span></li>
                    <li className="p-4 bg-white text-[#004D6E] flex items-center"><RiPagesLine className="mr-2" /> <span>Referral</span></li>
                    <li className="p-4 hover:bg-white hover:text-[#004D6E] flex items-center"><TbReportSearch className="mr-2" /> <span>Reports</span></li>
                    <li className="p-4 hover:bg-white hover:text-[#004D6E] flex items-center"><IoSettingsOutline className="mr-2" /> <span>Settings</span></li>
                </ul>
            </nav>
            <div className="p-4 flex items-center">
                <FaRegUserCircle className="mr-2" /> <span>Logout</span>
            </div>
        </div>
    );
}

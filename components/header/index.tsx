import { LuBell } from "react-icons/lu";
import { FcBusinessman } from "react-icons/fc";
import { FiSearch } from "react-icons/fi";

export default function Header() {
    return (
        <header className="flex justify-end items-center p-4 bg-gray-100">
            <div className="relative max-w-xs w-64 mr-2">
                <input
                    type="text"
                    placeholder="Name / Mobile"
                    className="border p-2 pl-6 rounded-[8px] w-full bg-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none"
                />
                <span className="absolute inset-y-0 right-1 flex items-center justify-center bg-blue-400 px-3 my-1 rounded-[10px] text-white">
                    <FiSearch />
                </span>
            </div>
            <button
                aria-label="View Notifications"
                className="p-2 rounded-[12px] bg-blue-400 border text-white mr-2 hover:bg-blue-500 focus:ring focus:ring-blue-500"
            >
                <LuBell />
            </button>
            <button
                aria-label="User Profile"
                className="p-2 rounded-[20px] bg-blue-400 border hover:bg-blue-500 focus:ring focus:ring-blue-500"
            >
                <FcBusinessman />
            </button>
        </header>
    );
}

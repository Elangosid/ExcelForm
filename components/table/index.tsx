import { FaEye } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

export default function Table() {
    return (
        <div className="bg-white shadow-md rounded-lg">
            <div className="flex justify-between p-4 ">
                <div className="z-[50px]">
                    <button className="p-2 px-4 bg-gray-100 rounded-[1px] hover:bg-[#004D6E] hover:text-white hover:rounded-[15px]">Incoming</button>
                    <button className="p-2 px-4 hover:bg-[#004D6E] hover:text-white bg-gray-100 hover:rounded-[15px]">
                        Outgoing
                    </button>
                </div>

                <div className="flex space-x-2 text-sm">
                    <div className="relative">
                        <select className="appearance-none border p-2 rounded pr-8 focus:outline-none" defaultValue="">
                            <option value="" disabled>Locations</option>
                        </select>
                        <IoMdArrowDropdown className="absolute right-2 top-3 text-gray-500 pointer-events-none" />
                    </div>
                    <div className="relative">
                        <select className="appearance-none border p-2 rounded pr-8 focus:outline-none" defaultValue="">
                            <option value="" disabled>Select Clinic</option>
                        </select>
                        <IoMdArrowDropdown className="absolute right-2 top-3 text-gray-500 pointer-events-none" />
                    </div>
                    <div className="relative">
                        <select className="appearance-none px-5 border p-2 rounded pr-20" defaultValue="">
                            <option value="" disabled>Select Date</option>
                        </select>
                        <IoMdArrowDropdown className="absolute right-10 top-3 text-gray-500 pointer-events-none" />
                        <FiSearch className="absolute right-2 top-3  text-gray-500 " />
                    </div>
                    <div className="space-x-4">
                        <button className="p-2 px-3 bg-[#004D6E] text-white rounded hover:bg-[#003c56]">Add New +</button>
                    </div>
                </div>
            </div>
            <table className="w-full text-left rounded-lg  overflow-hidden">
                <thead className="bg-gray-800 text-sm">
                    <tr className="shadow-md my-2">
                        <th className="p-4 text-white">Referral ID</th>
                        <th className="p-4 text-white">Patient Name</th>
                        <th className="p-4 text-white">DOB</th>
                        <th className="p-4 text-white">Phone Number</th>
                        <th className="p-4 text-white">Clinic</th>
                        <th className="p-4 text-white">Appt Date</th>
                        <th className="p-4 text-white">Reason</th>
                        <th className="p-4 text-white">Result</th>
                        <th className="p-4 text-white">Status</th>
                        <th className="p-4 text-white">Action</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-sm">
                    <tr className="shadow-md my-2">
                        <td className="p-2">REF12345</td>
                        <td className="p-2">John Doe</td>
                        <td className="p-2">1990-05-15</td>
                        <td className="p-2">+1 555-123-4567</td>
                        <td className="p-2">Central Clinic</td>
                        <td className="p-2">2024-12-01</td>
                        <td className="p-2">Routine Checkup</td>
                        <td className="p-2">Pending</td>
                        <td className="p-2 text-green-600">Active</td>
                        <td className="p-4">
                            <button className="px-3 py-2 bg-gray-100 text-green-400 rounded-[5px] hover:bg-gray-200 flex items-center">
                                <FaEye className="mr-2" /> <span>View</span>
                            </button>
                        </td>
                    </tr>
                    <tr className="shadow-md">
                        <td className="p-2">REF67890</td>
                        <td className="p-2">Jane Smith</td>
                        <td className="p-2">1985-10-22</td>
                        <td className="p-2">+1 555-987-6543</td>
                        <td className="p-2">Westside Clinic</td>
                        <td className="p-4">2024-11-25</td>
                        <td className="p-2">Follow-up</td>
                        <td className="p-2">Completed</td>
                        <td className="p-2 text-red-600">Inactive</td>
                        <td className="p-4">
                            <button className="px-3 py-2 bg-gray-100 text-green-400 rounded-[5px] hover:bg-gray-200 flex items-center">
                                <FaEye className="mr-2" /> <span>View</span>
                            </button>
                        </td>
                    </tr>
                    <tr className="shadow-md">
                        <td className="p-2">REF67890</td>
                        <td className="p-2">Jane Smith</td>
                        <td className="p-2">1985-10-22</td>
                        <td className="p-2">+1 555-987-6543</td>
                        <td className="p-2">Westside Clinic</td>
                        <td className="p-4">2024-11-25</td>
                        <td className="p-2">Follow-up</td>
                        <td className="p-2">Completed</td>
                        <td className="p-2 text-red-600">Inactive</td>
                        <td className="p-4">
                            <button className="px-3 py-2 bg-gray-100 text-green-400 rounded-[5px] hover:bg-gray-200 flex items-center">
                                <FaEye className="mr-2" /> <span>View</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

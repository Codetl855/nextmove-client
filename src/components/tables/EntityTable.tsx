import React from "react";
import PeriodSelect from "../ui/Dropdowns/CustomSelect";
import Image from "../ui/Images/Image";
import CustomSelect from "../ui/Dropdowns/CustomSelect";

type User = {
    id: number;
    logo: string;
    name: string;
    address: string;
    email: string;
    contact: string;
    regDate: string;
    plan: string;
    status: "Active" | "Inactive";
};

interface EntityTableProps {
    users: User[];
}

const EntityTable: React.FC<EntityTableProps> = ({ users }) => {
    return (
       
        <div className="overflow-x-auto">
       
            <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-aztec-light text-[#949494]">
                    <tr>
                        <th className="px-4 whitespace-nowrap py-3">Address</th>
                        <th className="px-4 whitespace-nowrap py-3">Agent Photo & Name</th>
                        <th className="px-4 whitespace-nowrap py-3">Email</th>
                        <th className="px-4 whitespace-nowrap py-3">Contact</th>
                        <th className="px-4 whitespace-nowrap py-3">Reg. Date</th>
                        <th className="px-4 whitespace-nowrap py-3">Plan</th>
                        <th className="px-4 whitespace-nowrap py-3">Status</th>
                        <th className="px-4 whitespace-nowrap py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="border-t border-t-[#E9E9E9]">
                            <td className="px-4 whitespace-nowrap py-3 ">
                               <div className="flex items-center gap-2">
                               <div className="h-10 w-10 rounded-full bg-aztec-light flex items-center justify-center">
                                  <Image
                                    src={user.logo}
                                    alt={user.name}
                                    className="h-6 w-6 "
                                />
                               </div>
                                <span className="font-medium ">{user.name}</span>
                               </div>
                            </td>
                            <td className="px-4 whitespace-nowrap py-3">{user.address}</td>
                            <td className="px-4 whitespace-nowrap py-3">{user.email}</td>
                            <td className="px-4 whitespace-nowrap py-3">{user.contact}</td>
                            <td className="px-4 whitespace-nowrap py-3">{user.regDate}</td>
                            <td className="px-4 whitespace-nowrap py-3">{user.plan}</td>
                            <td className="px-4 whitespace-nowrap py-3">
                                <span
                                    className={`px-3 py-2 text-xs rounded-xl ${user.status === "Active"
                                            ? "bg-[#E2F8E9] text-[#0AC247]"
                                            : "bg-red-100 text-red-600"
                                        }`}
                                >
                                    {user.status}
                                </span>
                            </td>
                            <td className="px-4 whitespace-nowrap py-3 flex gap-2 w-full">
                                <CustomSelect   
                                    value={""} // start with empty
                                    onChange={(action) => {
                                        if (action === "Edit") {
                                            console.log("Edit clicked");
                                        } else if (action === "Delete") {
                                            console.log("Delete clicked");
                                        }
                                    }}
                                    options={["Select","Edit", "Delete"]}
                                    className=" bg-white border h-[44px]  xl:w-full border-gray-300 "
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
          
        
    );
};

export default EntityTable;

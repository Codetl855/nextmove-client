import React, { useState } from "react";
import EntityTable from "../../components/tables/EntityTable";
import Pagination from "../../components/tables/Pagination";
import Button from "../../components/ui/Buttons/Button";
import Input from "../../components/ui/Inputs/Input";
import PeriodSelect from "../../components/ui/Dropdowns/CustomSelect";
import Tabs from "../../components/adminPanel/Tabs/Tabs";
import CustomSelect from "../../components/ui/Dropdowns/CustomSelect";
import Logo from "../../assets/img/agency-2.png"
import BreadCrumb from "../../components/adminPanel/BreadCrumb/BreadCrumb";

function UserManagement() {
    const [currentPage, setCurrentPage] = useState(1);
    const [action, setAction] = useState("Export to");

    // Mock data
    const users = new Array(30).fill(null).map((_, i) => ({
        id: i + 1,
        logo: Logo,
        name: "Amazon Build",
        address: "Lincoln Drive Harrisburg,",
        email: "info@amazonbuild.us",
        contact: "+231 06-7562071",
        regDate: "05/05/2025",
        plan: "Silver",
        status: "Active" as const,
    }));

    const pageSize = 10;
    const totalPages = Math.ceil(users.length / pageSize);
    const pageUsers = users.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const [period, setPeriod] = useState("All")
    const [activeTab, setActiveTab] = useState("agencies");
    return (

        <>
              <BreadCrumb />
            {/* Card */}
            <div className="grid grid-cols-1 bg-white rounded-xl   p-4">
                {/* Tabs */}
                <Tabs
                    tabs={[
                        { label: "Agencies", value: "agencies" },
                        { label: "Seller", value: "seller" },
                        { label: "Customers", value: "customers" },
                    ]}
                    active={activeTab}
                    onChange={setActiveTab}
                />

                {/* Filters */}
                <div className="flex flex-col md:flex-row items-center mb-4 gap-2 md:gap-0">
                    {/* Input */}
                    <Input
                        type="text"
                        placeholder="Search..."
                        outerClassName="w-full"
                        className="w-full  md:flex-1"
                        rightElement={
                            <span className="icon-[iconamoon--search-thin] text-2xl text-[#949494]" />
                        }
                    />

                    {/* Dropdowns wrapper */}
                    <div className="w-full flex sm:justify-between gap-2 md:ml-2">
                        <CustomSelect
                            value={period}
                            onChange={setPeriod}
                            options={["All", "Active", "Inactive"]}
                            outerClassName="w-full md:w-auto"
                            className="w-1/2 w-full md:w-auto text-xs bg-white border rounded-lg !h-[48px] border-gray-300"
                        />
                        <CustomSelect
                            value={action}
                            onChange={setAction}
                            options={["Export To", "Excel", "PDF"]}
                             outerClassName="w-full md:w-auto"
                            className="w-1/2 w-full md:w-auto bg-white rounded-md border-2 text-sm !h-[48px] !border-aztec !text-aztec "
                        />
                    </div>

                </div>



                <EntityTable users={pageUsers} />

                {/* Pagination */}
                <Pagination
                    className="border"
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </>
    );
}

export default UserManagement;

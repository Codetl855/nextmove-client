import { useState } from "react";
import Navbar from "../components/adminPanel/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/adminPanel/Sidebar/Sidebar";
import BreadCrumb from "../components/adminPanel/BreadCrumb/BreadCrumb";

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex bg-aztec-light h-screen">
      {/* Mobile Sidebar with Overlay */}
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-30 xl:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          <aside
            className={`fixed top-0 left-0 h-full w-64 z-40 bg-white text-black transition-transform duration-300 xl:hidden
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <Sidebar />
          </aside>
        </>
      )}

      {/* Desktop Sidebar (always visible in flex layout) */}
      {!isSidebarOpen && (<aside className="hidden xl:block xl:w-64 bg-white text-black">
        <Sidebar />
      </aside>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="h-[80px] flex items-center px-4 bg-white">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 "
          >
            <span className="icon-[ic--baseline-menu] text-2xl text-[#949494]"></span>
          </button>
          <Navbar />
        </header>

        <main className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto">
        
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;

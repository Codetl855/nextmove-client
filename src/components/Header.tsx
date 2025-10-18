import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/Logo.png";
import SecondaryButton from "@/components/ui/Buttons/extensions/SecondaryButton";
import PrimaryButton from "@/components/ui/Buttons/extensions/PrimaryButton";
import TopNav from "@/components/TopNav";
import { useState } from "react";
import Image from "@/components/ui/Images/Image";
import { Modal } from "@/components/common/Modal";
import { useAuth } from "@/providers/AuthProvider";
import { APP_ROUTES } from "@/constants/appRoutes";
import { useNavigate } from "react-router-dom";

function Header() {

    const [open, setOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const { user } = useAuth();
    const [openModal, setOpenModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");  
    const navigate = useNavigate();

    const handleAddProperty = () => {
        if (user) {
            navigate(APP_ROUTES.USER.PROPERTY.ADD_PROPERTY);
        } else {
            setModalMessage("You are not Logged in! Please login first to continue.");
            setModalTitle("Add Property")
            setOpenModal(true);
        }
      
    }

    return (
        <>
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)} title={modalTitle}>
                <p>
                   {modalMessage}
                </p>
            </Modal>
            <TopNav/>
            <header className="bg-white sticky top-0 z-10">
                <div className=" mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Image src={logo} alt="Logo" className="h-[46px] !rounded-none" />
                    </div>

                    <nav className="hidden md:flex items-center gap-6 text-base text-gray-600">
                        <NavLink to="/" className={({ isActive }) =>
                            isActive
                                ? "text-aztec font-bold"
                                : "text-black hover:text-gray-900"
                        }>Home</NavLink>
                        <NavLink to="#properties" className="text-black hover:text-gray-900">Buy</NavLink>
                        <NavLink to="#rent" className="text-black hover:text-gray-900">Rent</NavLink>
                        <NavLink to="#agents" className="text-black hover:text-gray-900">Agencies</NavLink>
                        <NavLink to="#pricing" className="text-black hover:text-gray-900"
                        >Pricing Plan</NavLink>
                        <NavLink to="#faq" className="text-black hover:text-gray-900">FAQ</NavLink>
                    </nav>

                    <div className="items-center gap-3 hidden md:flex">
                        <SecondaryButton
                            className="flex items-center md:w-auto h-[46px] text-sm rounded-lg"
                        >
                            <span className="icon-[iconamoon--search-thin] lg:mr-1 text-lg"></span>
                            <span className="hidden lg:block ">Search By ID</span>
                        </SecondaryButton>
                        <PrimaryButton
                            className="flex items-center md:w-auto flex-wrap h-[46px] text-sm rounded-lg"
                            onClick={() => handleAddProperty()}
                        >
                            <span className="icon-[majesticons--plus-line] lg:mr-1 text-lg"></span>
                            <span className="hidden lg:block">Add Property</span>
                        </PrimaryButton>
                    </div>

                    <button id="menu-btn" onClick={() => setOpen(!open)} className="md:hidden flex items-center text-2xl">
                        ☰
                    </button>
                </div>

                <div
                    id="mobile-menu"
                    className={`${open ? 'max-h-[600px] py-4' : 'max-h-0 py-0' } max-h-0 overflow-hidden transition-all duration-300 ease-in-out flex-col px-6 space-y-4 md:hidden border-t border-gray-200`}
                >
                    <NavLink to="#" className="block text-aztec font-bold hover:text-gray-900"
                    >Home</NavLink>
                    <NavLink to="#properties" className="block text-black hover:text-gray-900"
                    >Buy</NavLink>
                    <NavLink to="#rent" className="block text-black hover:text-gray-900">Rent</NavLink>
                    <NavLink to="#agents" className="block text-black hover:text-gray-900"
                    >Agencies</NavLink>
                    <NavLink to="#pricing" className="block text-black hover:text-gray-900"
                    >Pricing Plan</NavLink>
                    <NavLink to="#faq" className="block text-black hover:text-gray-900">FAQ</NavLink>

                    <SecondaryButton
                        className="w-full bg-white flex items-center h-[46px] border border-aztec text-aztec px-4 text-sm rounded-lg"
                    >
                        <span className="icon-[iconamoon--search-thin] mr-1 text-lg"></span>
                        Search By ID
                    </SecondaryButton>
                    <PrimaryButton
                        className="w-full bg-aztec flex items-center h-[46px] text-white px-4 text-sm rounded-lg"
                        onClick={() => handleAddProperty()}
                    >
                        <span className="icon-[majesticons--plus-line] mr-1 text-lg"></span>
                        Add Property
                    </PrimaryButton>
                </div>
            </header>
        </>
    );
}

export default Header;
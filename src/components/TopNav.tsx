import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Anchor from "@/components/ui/Buttons/extensions/AnchorLink";
import { useAuth } from "@/providers/AuthProvider";
import { APP_ROUTES } from "@/constants/appRoutes";
import UserDropdown from "@/components/ui/Dropdowns/UserDropdown";
import CustomSelect from "@/components/ui/Dropdowns/CustomSelect";
import { Modal } from "@/components/common/Modal";

function TopNav() {

    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [value, setValue] = useState("Language")
    const [modalMessage, setModalMessage] = useState("");
    const [modalTitle, setModalTitle] = useState("");
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleLoginClick = () => {
        navigate(APP_ROUTES.AUTH.SIGNIN);
    };

    const handleProtectedClick = (label: string) => {
        if (user) {
            setModalMessage("Working in progress...");
        } else {
            setModalMessage("You are not Logged in! Please login first to continue.");
        }
        setModalTitle("Info")
        setOpenModal(true);
    }

    return (
        <>  
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)} title={modalTitle}>
                <p>
                   {modalMessage}
                </p>
            </Modal>
            <div className={`transition-all duration-500 ease-in-out gap-4 md:gap-0 sm:grid sm:grid-cols-1 md:flex overflow-visible px-6 bg-aztec-light w-full justify-between
            ${open ? "max-h-[250px] py-2" : "max-h-0 py-0"} md:max-h-[48px] md:py-2`}>
                <div className="sm:grid sm:grid-cols-1 md:flex gap-4">
                    <div
                        className="relative form-group text-sm mb-4 md:mb-0 flex items-center h-full md:border-gray-100 md:border-r px-4"
                    >
                        <span className="icon-[solar--global-linear] text-lg mr-1"></span>
                   
                            <CustomSelect   
                                    value={value} // start with empty
                                    onChange={(action) => {
                                        if (action === "English") {
                                            setValue("English")
                                        } else if (action === "German") {
                                            console.log("Delete clicked");
                                        }
                                    }}
                                    options={["English", "German"]}
                                    className=" border-none !bg-aztec-light  xl:w-full"
                                />
                              
                    </div>

                    <div className="form-group mb-4 md:mb-0 flex items-center h-full px-4">
                        <span className="icon-[solar--settings-linear] text-lg mr-1"></span>
                        <a className="text-black ml-2 md:hidden lg:block text-sm">Change Currency</a>
                    </div>
                </div>

                <div className="sm:grid sm:grid-cols-1 md:flex auto-cols-max ">
                    <div
                        className="form-group flex mb-4 md:mb-0 items-center h-full md:border-gray-100 md:border-r px-4"
                    >
                        <span 
                            className="icon-[iconoir--bookmark] text-lg cursor-pointer"
                            onClick={() => handleProtectedClick("Save Search")}
                        ></span>
                        <a 
                            className="text-black ml-2 md:hidden lg:block cursor-pointer text-sm"
                            onClick={() => handleProtectedClick("Saved Searches")}
                        >   
                            Saved Searches
                        </a>
                       
                    </div>

                    <div
                        className="form-group mb-4 md:mb-0 flex items-center h-full md:border-gray-100 md:border-r px-4"
                    >
                        <span 
                            className="icon-[solar--heart-linear] text-lg cursor-pointer"
                            onClick={() => handleProtectedClick("Save Favourite Property")}
                        ></span>
                        <a className="text-black ml-2 md:hidden lg:block cursor-pointer text-sm"
                            onClick={() => handleProtectedClick("Favourite Properties")}
                        >
                            Favourite Properties
                        </a>
                    </div>
                       
                    {
                        // If user is logged in, show dropdown with profile and options
                        user ? (
                            <UserDropdown name={user.first_name + ' ' +user.last_name} image='' />
                        ) : (
                             <div
                        className="flex items-center h-full px-4"
                    >
                            <Anchor
                                className="text-black ml-2 md:hidden lg:block cursor-pointer text-sm"
                                onClick={handleLoginClick}>
                                Login
                            </Anchor>
                            </div>
                        )
                    }
                </div>
            </div>
            <button
                id="menu-btn"
                onClick={() => setOpen(!open)}
                className="md:hidden flex absolute bg-aztec text-white rounded-b-2xl 
                   left-1/2 -translate-x-1/2 z-[100] sm:w-auto 
                   items-center text-2xl "
            >
                <span className="icon-[mdi--chevron-down]"></span>
            </button>
        </>
    );
}

export default TopNav;
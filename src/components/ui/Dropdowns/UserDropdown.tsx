import React, { useState, useRef, useEffect } from "react";
import DropdownItem from "@/components/ui/Dropdowns/DropdownItem";
import { useNavigate } from "react-router-dom";
import { logout as apiLogout } from "@/services/authService";
import { APP_ROUTES } from "@/constants/appRoutes";
import { useAuth } from "@/providers/AuthProvider";
import { getDefaultAvatar } from "@/helpers/appHelpers";
import Image from "@/components/ui/Images/Image";

interface UserDropdownProps {
    name: string;
    image?: string | null; // make it optional or null-safe
}

const UserDropdown: React.FC<UserDropdownProps> = ({ name, image }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const { user, logout, setUser } = useAuth();
    

    const handleLogoutClick = async () => {
        logout();
        navigate(APP_ROUTES.AUTH.SIGNIN);
    };

   const defaultAvatar = getDefaultAvatar(user ? `${user.first_name} ${user.last_name}` : "Guest");

    // Close dropdown when clicking outside
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div
            className="form-group px-4 mt-2 sm:mt-0 relative inline-block"
            ref={dropdownRef}
        >
            {/* Profile + Name + Chevron */}
            <div
                className="flex items-center gap-2 cursor-pointer select-none"
                onClick={() => setOpen(!open)}
            >
                <Image
                    src={image && image.trim() !== "" ? image : defaultAvatar}
                    alt="profile"
                    className="w-8 h-8 rounded-full"
                />
                <span className="font-medium text-sm">{name}</span>
            </div>
            {/* Dropdown Menu */}
            {open && (
                <div className="fixed md:right-0 md:mt-2 w-48 bg-white shadow-md rounded-md overflow-hidden z-150">
                    <DropdownItem
                        icon="icon-[ri--dashboard-2-fill]"
                        label="Dashboard"
                        onClick={() => navigate(APP_ROUTES.USER.DASHBOARD)}
                    />
                    <DropdownItem
                        icon="icon-[akar-icons--person-add]"
                        label="Profile"
                        onClick={() => navigate(APP_ROUTES.USER.USER_PROFILE)}
                    />
                    <DropdownItem
                        icon="icon-[tabler--logout]"
                        label="Logout"
                        onClick={handleLogoutClick}
                    />
                </div>
            )}
        </div>
    );
};

export default UserDropdown;

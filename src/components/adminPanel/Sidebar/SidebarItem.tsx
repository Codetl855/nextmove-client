import { NavLink, NavLinkProps } from "react-router-dom"

interface SidebarItemProps{
    to: string,
    icon: string,
    label: string
}

const navLinkClass: NavLinkProps["className"] = ({isActive}) =>
     `flex items-center gap-3 text-[14px] px-4 py-3 rounded-lg text-[#949494] transition ${
    isActive ? "bg-[#FFF8E8] text-aztec" : "hover:bg-gray-100"
  }`;

  export default function SidebarItem({to, icon, label}: SidebarItemProps){
    return(
        <NavLink to={to} className={navLinkClass}>
            <span className={`${icon} text-[14px]`}></span>
            {label}
        </NavLink>
    )
  }
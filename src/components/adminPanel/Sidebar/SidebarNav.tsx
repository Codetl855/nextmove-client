import SidebarItem from "./SidebarItem";

export default function SidebarNav() {
  return (
    <nav className="flex-1 px-4 space-y-1 text-black font-medium">
      <SidebarItem to="/dashboard" icon="icon-[ri--dashboard-2-line]" label="Dashboard" />
      <SidebarItem to="/usermanagement" icon="icon-[nimbus--user-group]" label="User Management" />
      <SidebarItem to="/properties" icon="icon-[hugeicons--property-new]" label="Property Listing" />
      <SidebarItem to="/transactions" icon="icon-[clarity--two-way-arrows-line]" label="Transactions" />
      <SidebarItem to="/messages" icon="icon-[typcn--messages]" label="Messages" />
      <SidebarItem to="/inbox" icon="icon-[material-symbols--inbox-outline]" label="Inbox" />
      <SidebarItem to="/reviews" icon="icon-[ic--outline-reviews]" label="Reviews" />
      <SidebarItem to="/packages" icon="icon-[covid--covid-carrier-packages]" label="Packages" />
      <SidebarItem to="/posts" icon="icon-[uil--postcard]" label="Posts" />
    </nav>
  );
}

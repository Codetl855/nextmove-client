// UserProfile.tsx
import React from "react";
import Image from "../ui/Images/Image";

interface UserProfileProps {
  name: string;
  image: string;
  role?: string; // optional, only show if passed
  onClick?: () => void; // optional click handler (dropdown, etc.)
}

const UserProfile: React.FC<UserProfileProps> = ({ name, image, role, onClick }) => {

  console.log("UserProfile rendered with name:", name, "and image:", image);
  return (
    <div
      className="flex items-center gap-2 px-3 py-2 cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={image}
        alt="User Avatar"
        className="h-10 w-10 rounded-full object-cover"
      />
      <div className="hidden sm:flex flex-col items-start">
        <span className="text-sm hidden lg:block font-medium text-gray-800">{name}</span>
        {role && <span className="text-xs text-gray-500">{role}</span>}
      </div>
      <span className="icon-[ic--baseline-keyboard-arrow-down] hidden md:block text-2xl"></span>
    </div>
  );
};

export default UserProfile;

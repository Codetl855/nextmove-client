import loginPerson from "../../assets/img/loginperson.png"
import UserProfile from "../common/UserProfile";
import CustomSelect from "../ui/Dropdowns/CustomSelect";
import Input from "../ui/Inputs/Input";
function Navbar() {
  return (
    <>

      <div className="lg:ml-2 ">
        <Input
          type="text"
          placeholder="Search..."
          className="w-32 md:w-full"
          rightElement={
            <span className="icon-[iconamoon--search-thin] text-2xl text-[#949494]" />
          }
        />
      </div>

      <div className="flex items-center gap-1 lg:gap-4 ml-auto">
        {/* Notifications */}
        <button className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 bg-aztec-light hover:bg-gray-100">

          <span className="icon-[si--notifications-thick-line] text-[20px]"> </span>
          <span className="hidden lg:inline text-sm font-medium text-gray-700">
            Notifications
          </span>
        </button>

        {/* Language */}
        <div className="relative flex">
      
           <CustomSelect
              dashboard= {true}
              rightIcon="icon-[ic--outline-language] text-2xl"
              value={"Language"} // start with empty
              onChange={(action) => {
                if (action === "English") {
                  console.log("Edit clicked");
                } else if (action === "German") {
                  console.log("Delete clicked");
                }
              }}
              options={["English", "German"]}
              className=" border-none !bg-aztec-light  xl:w-full"
            />
          {/* dropdown can go here */}
        </div>

        {/* User Profile */}
        <UserProfile
          name="Mohammad Ali"
          image={loginPerson}
          role="Admin"
        />
      </div>
    </>
  )
}

export default Navbar;
import SecondaryButton from "../ui/Buttons/extensions/SecondaryButton";
import AgencyItem from "./AgencyItem";
import AgencyOne from "../../assets/img/agency-1.png"
import AgencyTwo from "../../assets/img/agency-2.png"
import AgencyThree from "../../assets/img/agency-3.png"

const agencies = [
  { id: 1, logo: AgencyOne, name: "Amazon Build", email: "amazonbuild@gmail.com", date: "Jul 2025" },
  { id: 2, logo: AgencyTwo, name: "Google Build", email: "googlebuild@gmail.com", date: "Jul 2025" },
  { id: 3, logo: AgencyThree, name: "Microsoft Build", email: "microsoftbuild@gmail.com", date: "Jul 2025" },
  { id: 4, logo: AgencyOne, name: "Amazon Build 2", email: "amazonbuild2@gmail.com", date: "Jul 2025" },
  { id: 4, logo: AgencyThree, name: "Amazon Build 2", email: "amazonbuild2@gmail.com", date: "Jul 2025" },

];

function RecentJoinAgencies() {
  return (
    <div className="bg-white p-4 rounded-2xl  w-full">
      <h2 className="font-semibold mb-4">Recent Join Agencies</h2>

         {/* List */}
      <div className="space-y-2">
        {agencies.map((agency) => (
          <AgencyItem
            key={agency.id}
            logo={agency.logo}
            name={agency.name}
            email={agency.email}
            date={agency.date}
          />
        ))}
      </div>

  
      <div className="mt-4">
        <SecondaryButton type="button" >
          Sign Up
        </SecondaryButton>
      </div>
    </div>
  );
}

export default RecentJoinAgencies;

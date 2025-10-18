import company1 from "../../assets/companies/company-1.svg";
import company2 from "../../assets/companies/company-2.svg";
import company3 from "../../assets/companies/company-3.svg";
import company4 from "../../assets/companies/company-4.svg";
import company5 from "../../assets/companies/company-5.svg";
import company6 from "../../assets/companies/company-6.svg";
import Image from "../ui/Images/Image";

const logos = [company1, company2, company3, company4, company5, company6];

function Companies() {
    return (
        <div className="mb-2 overflow-hidden">
            <p className="uppercase text-sm text-aztec mb-2 mx-auto text-center">
                Our Trust
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-gray-800">
                Trusted our Feature Agencies
            </h2>

           
            <div className="relative w-full overflow-hidden group">
                <div className="relative w-full h-32 flex items-center group">
                    <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
                        {[...logos, ...logos].map((logo, i) => (
                            <div
                                key={i}
                                className="flex items-center  justify-center px-8 flex-shrink-0"
                            >
                                <Image
                                    src={logo}
                                    alt={`company-${i + 1}`}
                                    className="h-12 object-contain transition-transform duration-300 ease-in-out
                                 hover:scale-220 z-150 hover:filter hover:invert hover:brightness-150"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>


        </div>
    );
}

export default Companies;

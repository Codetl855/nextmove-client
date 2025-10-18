
import PromotionalBanner from "@/assets/img/promotional-banner.png"
import { useState } from "react";
import AgencyCard from "@/components/detailsPage/detailsSidebar/AgencyCard";
import CompareProperty from "@/components/detailsPage/detailsSidebar/CompareProperty";
import BookNow from "@/components/detailsPage/detailsSidebar/BookNow";
import WhyChooseUs from "@/components/detailsPage/detailsSidebar/WhyChooseUs";
import FeatureListing from "@/components/detailsPage/detailsSidebar/FeatureListing";
import Image from "@/components/ui/Images/Image";

interface DetailsSidebarProps {
  property?: any; // or define proper type if you have a Property interface
}

const DetailsSidebar: React.FC<DetailsSidebarProps> = ({ property }) => {
  if (!property) {
    return <div>Loading property details...</div>;
  }

    const [house, setHouse] = useState<'first' | 'second' | 'third'>("first")
    return (
        <aside className="w-full  rounded-xl space-y-6">
            <AgencyCard />
            <CompareProperty />
            <BookNow property = {property} />
            <WhyChooseUs />

            {/* Featured Listing */}
            <FeatureListing house={house} setHouse={setHouse} />
            <div>
                <Image
                    src={PromotionalBanner}
                    alt="Promotional"
                    className="w-full  object-cover "
                />
            </div>
        </aside>
    );
}
export default DetailsSidebar;
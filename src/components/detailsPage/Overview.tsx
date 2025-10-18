import React, { useState } from 'react'
import Hr from '@/components/ui/Divider/Hr'
import map from "@/assets/img/map.png"
import floorImage from "@/assets/img/floor.png"
import { RadioGroup } from '@/components/ui/Inputs/extensions/RadioGroup'
import PropertyDetails from '@/components/detailsPage/PropertyDetails'
import AmenitiesList from '@/components/detailsPage/AmenitiesList'
import NearbyList from '@/components/detailsPage/NearbyList'
import HouseCard from '@/components/list/HouseCard'
import houseImage from "@/assets/img/house.png"
import Image from '@/components/ui/Images/Image'
interface OverviewProps {
  property?: any; // or define proper type if you have a Property interface
}

const Overview: React.FC<OverviewProps> = ({ property }) => {
  if (!property) {
    return <div>Loading property details...</div>;
  }

  const {
    property_id,
    price,
    size,
    year_built,
    property_type,
    listing_type,
    bedrooms,
    bathrooms,
    garages,
    created_at,
    ameneties,
  } = property;
  
    const [floor, setFloor] = useState<"first" | "second">("first");
    const [houseNumber, setHouseNumber] = useState<"first" | "second" | "third">("first");
    const numbers = [1,2]
    const details: [string, React.ReactNode][] = [
        ["ID", property_id || "N/A"],
        ["Price", `$${price || "N/A"}`],
        ["Area", `${size || "N/A"} sqft`],
        ["Build Year", year_built || "N/A"],
        ["Type", property_type || "N/A"],
        ["Status", listing_type || "N/A"],
        ["Rooms", bedrooms || "N/A"],
        ["Baths", bathrooms || "N/A"],
        ["Garage", garages || "N/A"],
        ["Added", new Date(created_at).toLocaleDateString() || "N/A"],
    ];

const amenities =
  ameneties && ameneties.amenity_names
    ? Array.isArray(ameneties.amenity_names)
      ? ameneties.amenity_names
      : typeof ameneties.amenity_names === "string"
        ? JSON.parse(ameneties.amenity_names)
        : []
    : [];


    console.log('Amenities:', amenities);
    

    return (
        <div className="lg:col-span-2 ">
            <div className='bg-white p-4 rounded-xl'>
                {/* Overview */}

                <h2 className="text-lg font-semibold mb-2">Overview</h2>
                <p className="text-sm text-[#949494]">
                    Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats.
                </p>


                <Hr />
                {/* Property Details */}
                <PropertyDetails details={details} />
                <Hr />

                {/* Amenities */}

                <h2 className="text-lg font-semibold mb-4">Amenities And Features</h2>
                <p className='text-[#949494] text-sm'>Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats and protecting a company’s operations & reputation.They can actually generate value and create opportunities.</p>
                <AmenitiesList amenities={amenities} />

                <Hr />


                {/* Nearby */}

                <h2 className="text-lg font-semibold mb-4">What's Nearby?</h2>
                <NearbyList places={[
                    ["School", "0.7 km"],
                    ["Hospital", "0.4 km"],
                    ["University", "525 m"],
                    ["Metro Station", "1.8 km"],
                    ["Gym", "0.5 km"],
                    ["Park", "0.1 km"],
                ]} />


            </div>
            {/* Map */}
            <div className="bg-white mt-2 md:mt-6  p-6 rounded-xl">
                <h2 className="text-lg font-semibold mb-4">Map</h2>
                <div className="w-full bg-gray-200 flex items-center justify-center rounded-md">
                    <Image src={map} className='object-cover' />
                </div>
            </div>
            {/* Floor plan */}
            <div className="bg-white mt-2 md:mt-6  p-6 rounded-xl ">
                <div className='flex justify-between'>
                    <h2 className="text-lg font-semibold mb-4">Floor plan</h2>
                    <div className="flex gap-2">
                        <RadioGroup
                            name="floor"
                            value={floor}
                            onChange={setFloor}
                            radioClassName="border w-3 h-3 bg-white border-aztec focus:ring-aztec focus:ring-2 checked:bg-aztec focus:!border-white"
                            options={[
                                { value: "first", label: "First Floor" },
                                { value: "second", label: "Second Floor" },
                            ]}
                        />
                    </div>
                </div>
                <div className="w-full bg-gray-200 flex items-center justify-center rounded-md">
                    <Image src={floorImage} className='' />
                </div>
            </div>
            <div className="py-4">
                <div className="flex justify-between py-4">
                    <h2 className="font-bold">Similar Homes You may Like</h2>
                    <RadioGroup
                        name="houseNumber"
                        value={houseNumber}
                        onChange={setHouseNumber}
                        radioClassName="border w-3 h-3 bg-white border-black checked:bg-black"
                        options={[
                            { value: "first", label: "" },
                            { value: "second", label: "" },
                            { value: "third", label: "" }
                        ]}
                    />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>

            
                    {numbers.map((item, idx) => (
                                <HouseCard
                                    key={idx}
                                    iconClass='icon-[ic--twotone-favorite]'
                                    image={houseImage}
                                    className='bg-[#E2E2E2]'
                                    title="Duplex Orkit Villa."
                                    address="59345 STONEWALL DR, Plaquemine, LA 70764, USA"
                                    sqft="8000 sqft"
                                    beds={4}
                                    baths={4}
                                    agent="Arlene McCoy"
                                    price="$7250.00"
                                    photosCount={8}
                                    layout="grid"
                                />
                            ))}
                    </div>            
            </div>
        </div>
    )
}

export default Overview
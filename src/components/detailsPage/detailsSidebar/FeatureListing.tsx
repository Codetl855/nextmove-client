import React from 'react'
import IconWrapper from '../../ui/Icons/IconWrapper'
import { RadioGroup } from '../../ui/Inputs/extensions/RadioGroup'
import FeatureListingImage from "../../../assets/img/feature-listing.png"
import Image from '../../ui/Images/Image'

const FeatureListing = ({ ...props }) => {
    return (
        <div className="bg-white grid gap-2 rounded-xl shadow overflow-hidden p-4">
            <div className="flex justify-between">
                <h3 className="text-sm font-semibold text-gray-700">
                    Featured Listing
                </h3>
                <RadioGroup
                    name="house"
                    value={props.house}
                    onChange={props.setHouse}
                    radioClassName="border w-3 h-3 bg-white checked:bg-black !border-black"
                    className="!gap-1"
                    options={[
                        { value: "first", label: "" },
                        { value: "second", label: "" },
                        { value: "third", label: "" },
                    ]}
                />
            </div>
            <Image
                src={FeatureListingImage}
                alt="Listing"
                className="w-full  object-cover "
            />
            <div className="flex justify-between">
                <div>
                    <p className="text-orange-600 font-semibold">$3,05,958</p>
                    <p className="text-xs text-gray-500">
                        120 Elgin St. Celina, Delaware
                    </p>
                </div>
                <IconWrapper icon="icon-[ic--baseline-arrow-forward]"
                    className="!bg-aztec h-10 w-10 !rounded-full"
                    iconClassName="text-white" />
            </div>
        </div>
    )
}

export default FeatureListing
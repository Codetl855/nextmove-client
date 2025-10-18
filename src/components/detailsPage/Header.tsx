import React from 'react'
import IconWrapper from '@/components/ui/Icons/IconWrapper'
import FeatureItem from '@/components/detailsPage/FeatureItem'
import Hr from '@/components/ui/Divider/Hr'

interface HeaderProps {
  property?: any; // or define proper type if you have a Property interface
}

const Header: React.FC<HeaderProps> = ({ property }) => {
  if (!property) {
    return <div>Loading property details...</div>;
  }

  const {
    title,
    price,
    bedrooms,
    bathrooms,
    kitchen,
    size,
    address,
  } = property;

    return (
        <div className="flex items-start justify-between gap-6 mb-4 flex-wrap">
            <div className="flex-1">
                <div className="flex justify-between">
                    <h1 className="text-xl sm:text-3xl font-extrabold text-gray-800">
                       {title || 'Property Title'}
                    </h1>
                    <div className="text-yellow-600 font-extrabold text-2xl sm:text-3xl">${price}<span className="text-gray-400 font-medium text-sm"></span></div>
                </div>
                <Hr className='!border-gray-100' />
                <div className="mt-4 flex flex-col  md:flex-row md:justify-between flex-wrap sm:items-center sm:gap-8 text-sm text-gray-600">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                        <div className='grid gap-2'>
                            <p>Feature</p>
                            <div className='flex gap-2'>
                                <FeatureItem icon="icon-[fluent--arrow-move-inward-20-regular]" label={`${size || "0"} sqft`} />
                                <FeatureItem icon="icon-[bx--bed]" label={`${bedrooms || "0"} Beds`} />
                                <FeatureItem icon="icon-[la--bath]" label={`${bathrooms || "0"} Baths`} />
                                <FeatureItem icon="icon-[streamline-ultimate--tools-kitchen-scale]" label={`${kitchen || "0"} Kitchen`} />
                            </div>
                        </div>
                        <div className='grid gap-2'>
                            <p>Location</p>
                            <FeatureItem
                                icon="icon-[fluent--location-16-regular]"
                                label={`${address || "riyadh, saudi arabia"}`}
                            />
                        </div>
                    </div>
                    <div className=" flex-shrink-0">

                        <div className="mt-3 flex justify-end gap-2">
                            <IconWrapper
                                icon="icon-[ic--sharp-app-shortcut]"
                                className="bg-white  "
                                iconClassName='text-xl'

                            />
                            <IconWrapper
                                icon="icon-[ic--baseline-favorite-border]"
                                className="bg-white  "
                                iconClassName='text-xl'

                            />
                            <IconWrapper
                                icon="icon-[ri--share-line]"
                                className="bg-white  "
                                iconClassName='text-xl'

                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header
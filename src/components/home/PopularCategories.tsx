import React from 'react'
import Category from '@/components/home/Category'
import flats from '@/assets/categories/flats.png';
import plots from '@/assets/categories/plots.png';
import shops from '@/assets/categories/shops.png';
import houses from '@/assets/categories/houses.png';
import offices from '@/assets/categories/offices.png';
import farmHouses from '@/assets/categories/farm-houses.png';

const PopularCategories = () => {
    return (
   <section className="bg-aztec-light overflow-hidden">
  <div className="mx-auto px-6 py-10 md:py-20 max-w-7xl">
    <p className="uppercase text-sm text-aztec mb-2 mx-auto text-center">
      Property Type
    </p>
    <h2 className="text-4xl md:text-3xl font-bold text-center mb-8 text-gray-800">
      Popular Categories
    </h2>

    {/* Slider container */}
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-scroll gap-2">
        {/* First set */}
        <Category imgSrc={flats} category="Flats" totalProperties={234} />
        <Category imgSrc={plots} category="Plots" totalProperties={234} />
        <Category imgSrc={shops} category="Shops" totalProperties={234} />
        <Category imgSrc={houses} category="Houses" totalProperties={234} />
        <Category imgSrc={offices} category="Offices" totalProperties={234} />
        <Category imgSrc={farmHouses} category="Farm Houses" totalProperties={234} />

        {/* Duplicate set for infinite loop */}
        <Category imgSrc={flats} category="Flats" totalProperties={234} />
        <Category imgSrc={plots} category="Plots" totalProperties={234} />
        <Category imgSrc={shops} category="Shops" totalProperties={234} />
        <Category imgSrc={houses} category="Houses" totalProperties={234} />
        <Category imgSrc={offices} category="Offices" totalProperties={234} />
        <Category imgSrc={farmHouses} category="Farm Houses" totalProperties={234} />
      </div>
    </div>
  </div>
</section>

    )
}

export default PopularCategories
import React, { useState } from 'react'
import Property from '@/components/home/Property'
import PropertyFilter from '@/components/home/featuredProperties/PropertyFilter'
import Button from '@/components/ui/Buttons/Button'
import { useGetFeaturedProperties } from '@/hooks/property/useGetFeaturedProperties'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '@/constants/appRoutes'

const FeaturedProperties = () => {

  const [activeFilter, setActiveFilter] = useState("House")
  const { properties, loading, errors } = useGetFeaturedProperties(activeFilter);
  const navigate = useNavigate();
  return (
    <section>
      <div className="mx-auto px-6 py-10 md:py-20 max-w-7xl">
        <p className="uppercase text-sm text-aztec mb-2 mx-auto text-center">
          Featured Properties
        </p>
        <h2
          className="text-2xl md:text-4xl font-bold text-center mb-0 text-gray-800"
        >
          Recommended For You
        </h2>
        <PropertyFilter
          filters={["Apartment", "Villa", "Studio", "House", "Office"]}
          active={activeFilter}
          onChange={setActiveFilter}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && <div className="text-center py-10">Loading...</div>}
          {errors && <div className="text-center py-10 text-red-500">{errors}</div>}
          {!loading && !errors && properties.length === 0 && (
            <div className="text-center py-10">No featured properties found.</div>
          )}
          {properties.map((p: any) => (
            <div
              key={p.id}
              onClick={() => navigate(APP_ROUTES.USER.PROPERTY.PROPERTY_DETAIL.replace(":id", p.id))}
              className="cursor-pointer"
            >
              <Property
                key={p.id}
                name={p.title || "No Address"}
                size={p.size ? `${p.size}sqf` : "N/A"}
                beds={p.bedrooms}
                baths={p.bathrooms}
                price={p.price ? `$${p.price}` : "N/A"}
                imgSrc={p.media?.[0]?.media_url || "/properties/1.png"}
                user={p.owner?.name || "Unknown"}
                userImg={p.owner?.avatar || "/avatar-sm.png"}
              />
            </div>
          ))}
        </div>
        <div className='grid justify-center mt-10'>
          <Button
            className="bg-aztec flex items-center h-[48px] text-white px-4 text-sm rounded-lg"
          >
            View All Properties
            <span className="icon-[mingcute--arrow-right-line] ml-1 text-lg"></span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperties
import React, { useState } from 'react'
import BreadCrumb from '../components/adminPanel/BreadCrumb/BreadCrumb'
import CustomSelect from '../components/ui/Dropdowns/CustomSelect'
import IconWrapper from '../components/ui/Icons/IconWrapper'
import SidebarFilter from '../components/list/SidebarFilter'
import HouseCard from '../components/list/HouseCard'
import house from "../assets/img/house.png"
import BlogSection from '../components/home/BlogSection'
import Pagination from '../components/tables/Pagination'
import useSearch from '@/hooks/search/useSearch'

const List = () => {
      const { searchFilters, setSearchFilters, reset, apply } = useSearch()
console.log(searchFilters);
    const [number, setNumber] = useState("Sort By")
    const [layout, setLayout] = useState("grid")
    const numbers = [1, 2, 3, 4, 5]
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <>
            <div className=" bg-aztec-light pt-4 z-20 relative">
                <div className='mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8'>

                    <div className='h-13 flex items-center pl-6 bg-white rounded-md '>
                        <BreadCrumb />
                    </div>
                    {/* Header */}
                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-2">
                            <h2 className="text-[28px] font-bold">Houses in Islamabad</h2>
                            <span className="flex items-center md:gap-1 rounded-full px-3 py-1 border border-aztec text-aztec bg-white text-sm md:text-base">
                                New House
                                <span className="icon-[ic--baseline-close] text-aztec" />
                            </span>
                        </div>
                        <div className="flex gap-3 mt-3 sm:mt-0">
                            <IconWrapper
                            label='Save Search'
                            icon='icon-[iconoir--bookmark]'
                            className='bg-white '
                            iconClassName='text-xl'
                            />
                            <CustomSelect
                                value={number}
                                onChange={setNumber}
                                options={["Sort By", "Asc", "Des"]}
                                className='border-white bg-white px-4 h-[48px]' 
                            />
                            <IconWrapper
                                icon="icon-[line-md--grid-3]"
                                className="bg-white  "
                                iconClassName='text-xl'
                                onClick={() => setLayout("grid")}
                            />
                            <IconWrapper
                                icon="icon-[ic--outline-format-list-bulleted]"
                                className="bg-white  "
                                iconClassName='text-xl'
                                onClick={() => setLayout("list")}
                            />

                        </div>
                    </div>
                    <p className="text-sm  mt-1">Showing 1–5 of 1,125 results</p>



                    {/* Layout */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">

                        <SidebarFilter />

                        {/* Listings */}
                        <div className={`col-span-2 gap-4 ${layout === "grid"
                            ? "grid grid-cols-1 lg:grid-cols-2" // 2 cards side by side
                            : "grid grid-cols-1 space-y-4" // 1 per row in list
                            }`}>
                            {numbers.map((item, idx) => (
                                <HouseCard
                                    key={idx}
                                    image={house}
                                    iconClass='icon-[ic--baseline-favorite]'
                                    title="Duplex Orkit Villa."
                                    className='text-[#FF5555]'
                                    address="59345 STONEWALL DR, Plaquemine, LA 70764, USA"
                                    sqft="8000 sqft"
                                    beds={4}
                                    baths={4}
                                    agent="Arlene McCoy"
                                    price="$7250.00"
                                    photosCount={8}
                                    layout={layout}
                                />
                            ))}
                        </div>

                    </div>
                    <div className="grid  md:grid-cols-3">
                        <div></div>

                       <div className="md:col-span-2 flex justify-center md:justify-start" >
                         <Pagination
                            className=''
                            currentPage={currentPage}
                            totalPages={5}
                            onPageChange={setCurrentPage}
                            onlyButtons={true}
                        />
                       </div>
                    </div>
             
                </div>
                   <div className="bg-white mt-4 md:mt-8">

                    <BlogSection />
                </div>
            </div>
        </>
    )
}

export default List
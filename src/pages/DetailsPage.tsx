import React, { useState } from "react";
import Header from "@/components/detailsPage/Header";
import Slider from "@/components/detailsPage/Slider";
import Overview from "@/components/detailsPage/Overview";
import MobileApp from "@/components/home/MobileApp";
import DetailsSidebar from "@/components/detailsPage/detailsSidebar/DetailsSidebar";
import { usePropertyDetail } from "@/hooks/property/usePropertyDetail";
import { useParams } from "react-router-dom";
import { useEffect } from "react";



export default function DetailsPage() {

    const { id } = useParams<{ id: string }>();
    const { propertyDetail, handleFetchPropertyDetail } = usePropertyDetail(id!);

    useEffect(() => {
        if (id) handleFetchPropertyDetail();
    }, [id]);

    console.log('selected property', propertyDetail);


    return (
        <div className=" bg-aztec-light pt-4">
            <div className='mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8'>

                <Header property = {propertyDetail}/>
                <Slider property = {propertyDetail} />
                {/* bottom section */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                    <Overview property = {propertyDetail} />

                    <DetailsSidebar property = {propertyDetail} />

                </section>


            </div >
            <div className="bg-white mx-auto w-full mx-auto px-6 py-10 md:pb-14 md:pt-4 ">
                <div className="max-w-7xl mx-auto">

                    <MobileApp />
                </div>


            </div>
        </div >
    );
}

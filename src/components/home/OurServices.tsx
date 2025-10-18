import React from 'react'
import Service from '@/components/home/Service'
import buyHome from '@/assets/vectors/buy-home.png';
import sellHome from '@/assets/vectors/sell-home.png';
import rentHome from '@/assets/vectors/rent-home.png';

const OurServices = () => {
    return (
        <section>
            <div className="mx-auto px-6 py-10 md:py-20 max-w-7xl">
                <p className="uppercase text-sm text-aztec mb-2 mx-auto text-center">
                    Our Services
                </p>
                <h2
                    className="text-2xl md:text-4xl font-bold text-center mb-8 text-gray-800"
                >
                    What We Do?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Service service="Buy A New Home"
                        description="Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience."
                        imgSrc={buyHome} />
                    <Service service="Sell A Home"
                        description="Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale."
                        imgSrc={sellHome} />
                    <Service service="Rent A Home"
                        description="Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs."
                        imgSrc={rentHome} />
                </div>
            </div>
        </section>
    )
}

export default OurServices
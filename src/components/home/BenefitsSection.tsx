import React from 'react'
import Benefit from '@/components/home/Benefit'
import heroBenefit from '@/assets/img/hero-benefit.png';
import customize from '@/assets/icons/customize.png';
import partnership from '@/assets/icons/partnership.png';
import expertise from '@/assets/icons/expertise.png';
import Image from '@/components/ui/Images/Image';



const BenefitsSection = () => {
    return (
        <section className="bg-aztec-light">
            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto px-6 py-10 md:py-20 max-w-7xl"
            >
                <div className="hidden md:block">
                    <Image
                        src={heroBenefit}
                        alt="Benefit"
                        className="w-full h-full object-cover !rounded-3xl"
                    />
                </div>
                <div className="flex flex-col items-start">
                    <p className="uppercase text-sm text-aztec mb-2 text-left">
                        Our Benefits
                    </p>
                    <h2
                        className="text-2xl md:text-4xl font-bold mb-8 text-gray-800 text-left"
                    >
                        Why Choose <span className="uppercase">NEXTMOVE</span>
                    </h2>
                    <div className="space-y-6">
                        <Benefit title='Expertise You Can Trust' description='With years of industry experience, our team of seasoned professionals is dedicated to providing you with expert guidance and personalized solutions for all your real estate needs.' imgSrc={expertise} />
                        <Benefit title='Customized Solutions' description='We pride ourselves on crafting personalized strategies to match your unique goals, ensuring a seamless real estate journey.' imgSrc={customize} />
                        <Benefit title='Transparent Partnerships' description='Transparency is key in our client relationships. We prioritize clear communication and ethical practices, fostering trust and reliability throughout.' imgSrc={partnership} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BenefitsSection